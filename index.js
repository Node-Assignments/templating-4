const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', 'view')
app.use(bodyParser.urlencoded({ extended: false }))

const root = require('./routes/root')
const show = require('./routes/show')

app.use(show)
app.use(root)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'view', 'nf.html'))
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})