/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { Home } from '#resources/views/pages/home'
import { Login } from '#resources/views/pages/login'


router.get('/', () => {
  return <Home />
}).as('home')

router.get('/login', () =>{
  return <Login />
}).as('login')