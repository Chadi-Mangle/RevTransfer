import type { HttpContext } from '@adonisjs/core/http'

export default class FileController {
    public async upload({ request, response }: HttpContext) {
    const file = request.file('file')
    
    if (file) {
      return (
      <div id="upload-result">
        <p>Works !</p>
      </div>
      )
    }
    
    return (
      <div id="upload-result">
        <p>Dont have file</p>
      </div>
     )
  }
}
