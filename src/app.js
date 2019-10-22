const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + '.png')
    }
})

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(bodyParser.urlencoded({ extended: true }))

const upload = multer({
    storage: storage

})

app.listen(3000, () => {
    console.log('god is top')
})

app.post('/animal', upload.single('animal'), teste)

function teste(req, res) {
    console.log(req.file)
}