const express = require('express');
const app = express()
const router = express.Router()
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'root.html'))
})

module.exports = router
