import vite from '@adonisjs/vite/services/main'

export function space(num: number) {
  return `calc(${num} * var(--space))`
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

