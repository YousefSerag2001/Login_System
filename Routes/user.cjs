const Router = require('express')
const userController = require ('../Controllers/userController.cjs')
const router = Router.Router()

router.post('/api/users/register' , userController.register)
router.post('/api/users/login' , userController.login)

module.exports = router