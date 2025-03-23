import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import vite from '@adonisjs/vite/services/main'
import { Html } from '@kitajs/html'

export function space(num: number) {
  return `calc(${num} * var(--space))`
}

export function route(...args: Parameters<typeof router.makeUrl>) {
  return router.makeUrl(...args)
}

export function csrfField() {
  const { request } = HttpContext.getOrFail()

  return <input type="hidden" value={request.csrfToken} name="_csrf" />
}

export async function EntrypointComponent({ entrypoints }: { entrypoints: string[] }) {
  const tags = await vite.generateEntryPointsTags(entrypoints)
  
  return (
    <>
      {tags.map((tag) => {
        if (tag.tag === 'script') {
          return <script {...tag.attributes} />
        } else {
          return <link {...tag.attributes} />
        }
      })}
    </>
  )
}

export function ImageComponent({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  const url = vite.assetPath(src)
  return <img src={url} alt={alt} className={className} />
}

export const Vite = {
  Entrypoint: EntrypointComponent,
  Image: ImageComponent
}

