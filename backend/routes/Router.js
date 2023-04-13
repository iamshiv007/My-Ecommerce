const router = require('express').Router()

// user
const user = require("./userRoute")
router.use('/', user)

module.exports = router
