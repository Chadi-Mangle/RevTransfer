import { Layout } from "../components/layout.js"
// import { csrfField, route } from "#start/vite"
// import { HttpContext } from "@adonisjs/core/http"

export function Home() {
  // const ctx = HttpContext.get()
  // const isAuthenticated = ctx?.auth?.user

  return (
    <Layout>
      {/* Hero Section */}
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div class="container mx-auto px-6 py-16 md:py-24 lg:py-32">
          <div class="flex flex-col md:flex-row items-center justify-between">
            {/* Hero Text */}
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Partagez vos fichiers en toute <span class="text-yellow-300">sécurité</span>
              </h1>
              <p class="text-xl text-white/90 mb-8">
                RevTransfer vous permet de partager vos fichiers avec un chiffrement de bout en bout, 
                un système de versioning et des options d'expiration personnalisables.
              </p>
              <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                <a 
                  href="/" 
                  class="bg-white text-indigo-600 hover:bg-yellow-300 px-8 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Commencer gratuitement
                </a>
                <a 
                  href="/login" 
                  class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Se connecter
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div class="md:w-5/12">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
                <div class="bg-gray-900/80 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                    <div class="flex space-x-2">
                      <div class="w-3 h-3 rounded-full bg-red-500"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div class="border border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p class="text-gray-300 mb-2">Glissez-déposez vos fichiers ici</p>
                    <p class="text-gray-500 text-sm">ou</p>
                    <button class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Parcourir les fichiers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div class="bg-gray-50 py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-16">Pourquoi choisir RevTransfer?</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Chiffrement de bout en bout</h3>
              <p class="text-gray-600">
                Vos fichiers sont chiffrés dès leur envoi et ne sont déchiffrés que par le destinataire, garantissant une confidentialité totale.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Système de versioning</h3>
              <p class="text-gray-600">
                Modifiez et mettez à jour vos fichiers après leur envoi. Les destinataires ont toujours accès à la dernière version.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-3">Options d'expiration</h3>
              <p class="text-gray-600">
                Définissez des limites de téléchargement ou des dates d'expiration pour que vos fichiers ne soient accessibles que selon vos conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div class="bg-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Prêt à essayer RevTransfer?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-8">
            Commencez gratuitement dès aujourd'hui et découvrez comment RevTransfer peut sécuriser et simplifier vos partages de fichiers.
          </p>
          
          <div class="max-w-md mx-auto">
            <a 
              href="/register" 
              class="w-full block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors text-center"
            >
              Créer un compte gratuitement
            </a>
            <p class="mt-4 text-gray-500 text-sm">
              Pas besoin de carte de crédit. Essai gratuit sans limite de temps.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <h2 class="text-2xl font-bold">RevTransfer</h2>
              <p class="text-gray-400 mt-2">Partagez vos fichiers en toute sécurité</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-3">Liens</h3>
                <ul class="space-y-2">
                  <li><a href="/" class="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                  <li><a href="/pricing" class="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
                  <li><a href="/about" class="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                </ul>
              </div>
              
              <div>
                <h3 class="text-lg font-semibold mb-3">Légal</h3>
                <ul class="space-y-2">
                  <li><a href="/terms" class="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                  <li><a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
            <p class="text-gray-400">&copy; {new Date().getFullYear()} RevTransfer. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </Layout>
  )
}