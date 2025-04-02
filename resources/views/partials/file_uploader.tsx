import { csrfField } from '#utils/csrf'
import { FilePreview } from './file_preview.js'

export function FileUploader() {
  return (
    <form
      action="/upload"
      method="POST"
      enctype="multipart/form-data"
      up-submit
      up-target="#upload-result"
    >
      {csrfField()}
      <div class="dropzone border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer bg-gray-850 relative">
        <input
          type="file"
          name="file"
          id="file-upload"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <label
          for="file-upload"
          class="cursor-pointer flex flex-col items-center justify-center h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 mx-auto text-indigo-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p class="text-xl text-gray-300 mb-2">Glissez-déposez vos fichiers ici</p>
          <p class="text-gray-400">ou cliquez pour parcourir</p>
        </label>
      </div>
      <div class="mt-6">
        {/* Les aperçus des fichiers seront insérés ici */}
        
        <div class="space-y-4" id="file-preview"/>
        
        {/* Options de transfert */}
        <div class="mt-8 space-y-4">
          <div class="flex items-center justify-between border-b border-gray-700 pb-4">
            <label for="expiration" class="text-gray-300 font-medium">
              Expiration
            </label>
            <select
              id="expiration"
              class="bg-gray-700 border border-gray-600 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="1">1 jour</option>
              <option value="3">3 jours</option>
              <option value="7">7 jours</option>
              <option value="30">30 jours</option>
            </select>
          </div>
        </div>
        <div id="upload-result" />
        {/* Bouton d'envoi */}
        <div class="mt-8">
          <button
            type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900"
          >
            Transférer maintenant
          </button>
        </div>
      </div>
    </form>
  )
}
