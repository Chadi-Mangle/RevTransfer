import { Layout } from "#components/layout"
import { csrfField } from "#utils/csrf"

export function Login() {
  return (
    <Layout>
      <div up-main>
        <div class="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Connexion</h2>
            
            <form 
            action="/login" 
            method="post"
            class="space-y-6"
            up-submit
            up-layer="body"
            >
            {csrfField()}
            
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email
                </label>
                <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="votre@email.com" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                />
            </div>
            
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
                </label>
                <input 
                type="password" 
                id="password"
                name="password" 
                placeholder="••••••••" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                />
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                <input 
                    id="remember" 
                    name="remember" 
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                />
                <label for="remember" class="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                </label>
                </div>
                
                <a href="/forgot-password" class="text-sm text-indigo-600 hover:text-indigo-500">
                Mot de passe oublié?
                </a>
            </div>
            
            <button 
                type="submit" 
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
                Se connecter
            </button>
            </form>
            
            <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Pas encore de compte? 
                <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
                Créer un compte
                </a>
            </p>
            </div>
        </div>
    </div>
    </Layout>
  )
};