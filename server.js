const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './dist')))

app.use('/', (req,res) => {
    res.send("App works.")
})

app.get('*', (req, res) => {
    res.sendFile(__dirname, './dist/index.html')
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server listening at port ${port}`)
})