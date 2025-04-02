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
import FileController from '#controllers/file_controller'

const fileController = new FileController()

router.get('/', () => {
  return <Home />
}).as('home')

router.get('/login', () =>{
  return <Login />
}).as('login')

router.get('/register', () => {
  return <Login />
}).as('register')

router.post('/upload', async (ctx) => {
  return fileController.upload(ctx)
}).as('upload')