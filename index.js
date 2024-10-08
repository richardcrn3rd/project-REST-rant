require ('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')

})
app.get('*', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <h1 style= "404 NOT HERE!!</h1>
        </body>
    `)
})


app.listen(process.env.PORT, () => {
    console.log('I AM ALIVE')
})