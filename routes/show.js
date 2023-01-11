const express = require('express');
const app = express()
const router = express.Router()

let arr = []
router.post('/show', (req, res, next) => {
    arr.push(req.body.formTxt)
    console.log("Arr: ", arr)
    res.render('show', { inputForm: arr })
})


module.exports = router