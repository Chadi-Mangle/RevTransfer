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

router.get('/register', () => {
  return <Login />
}).as('register')


router.post('/upload', async ({ request, response }) => {
  const file = request.file('file')
  console.log(file) 
  
  
  // if (!file) {
  //   return response.badRequest('No file uploaded')
  // }

  // const key = `uploads/${cuid()}.${file.extname}` 
  // await file.moveToDisk(key)


}).as('upload') 