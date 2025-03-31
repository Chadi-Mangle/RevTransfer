import type { HttpContext } from '@adonisjs/core/http'

import { cuid } from '@adonisjs/core/helpers'

export default class FileController {
  public async upload({ request, response }: HttpContext) {
    const file = request.file('file')
    if (!file) {
      return response.badRequest('No file uploaded')
    }

    const key = `uploads/${cuid()}.${file.extname}`
    await file.moveToDisk(key)

    return response.json({ message: 'File uploaded successfully', key })
  }
}
