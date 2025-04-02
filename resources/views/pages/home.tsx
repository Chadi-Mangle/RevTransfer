import { Layout } from "#components/layout"
import { route } from "#utils/routeur"
import { FileUploader } from "#partials/file_uploader"

export function Home() {
  return (
    <Layout>
      <div class="flex flex-col h-screen bg-gray-900">
        {/* Header minimaliste */}
        <header class="bg-gray-800 shadow-md border-b border-gray-700">
          <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center">
              <h1 class="text-xl font-bold text-indigo-400">RevTransfer</h1>
            </div>
            <div class="flex items-center space-x-4">
              <a 
                href={route('login')}
                class="text-gray-300 hover:text-indigo-400 transition-colors"
                up-layer="new"
                up-size="small"
              >
                Se connecter
              </a>
              <a 
                href={route('register')}
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                up-layer="new"
                up-size="small"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </header>

        {/* Contenu principal centré */}
        <main class="flex-1 flex items-center justify-center px-4 py-8">
          <div class="w-full max-w-3xl">
            <div class="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
              <div class="p-8">
                <h2 class="text-2xl font-bold text-center text-gray-100 mb-6">
                  Transférez vos fichiers en toute sécurité
                </h2>
                

                {/* Zone de téléchargement */}                
                <FileUploader />
                

              </div>
            </div>
            
            {/* Zone de résultat */}
            <div id="upload-result" class="mt-6"></div>
          </div>
        </main>

        {/* Footer minimaliste */}
        <footer class="bg-gray-800 border-t border-gray-700 py-4">
          <div class="container mx-auto px-4 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} RevTransfer • <a href="/terms" class="hover:text-indigo-400 transition-colors">Conditions</a> • <a href="/privacy" class="hover:text-indigo-400 transition-colors">Confidentialité</a></p>
          </div>
        </footer>
      </div>
    </Layout>
  )
}