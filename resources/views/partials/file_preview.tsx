import { getFileIcon } from "#resources/js/utils";

 export function FilePreview(file: File) {
  return (
    <div class="flex items-center justify-between bg-gray-700 rounded-lg p-4 shadow-md">
      <div class="flex items-center space-x-4">
        {/* Icône du fichier */}
        <div class="text-indigo-400">
        
        {getFileIcon(file.type)}
        </div>

        {/* Nom du fichier */}
        <div>
          <p class="text-gray-200 font-medium truncate max-w-xs" safe>{file.name}</p>
          <p class="text-gray-400 text-sm" safe>{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      </div>

      {/* Bouton d'action (optionnel) */}
      {/* <button
        class="text-red-400 hover:text-red-500 transition-colors"
        onclick={() => alert('Supprimer le fichier')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
    </div>
  );
}