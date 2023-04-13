const express = require('express')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/Auth')
const { registerUser, loginUser, logout, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser } = require('../controllers/UserController')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticatedUser, getUserDetails)
router.route('/password/update').put(isAuthenticatedUser, updatePassword)
router.route('/me/update').put(isAuthenticatedUser, updateProfile)
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles("Admin"), getAllUsers)
router.route('/admin/user/:id')
.get(isAuthenticatedUser, authorizeRoles("Admin"), getSingleUser)
.put(isAuthenticatedUser, authorizeRoles("Admin"), updateUserRole)
.delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteUser)

module.exports = router