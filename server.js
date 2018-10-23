const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

// Setup Body-Parser middleware to parse data as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// INDEX Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/frontend.js', function (req, res) {
    res.sendFile(__dirname + '/' + 'frontend.js')
})

// POST Route for AJAX
app.post('/', (req, res) => {
    // store frontend input
    const frontendJSON = req.body
    console.log('Frontend Input:', frontendJSON.input)
    // create a randon integer
    let randInt = Math.floor(Math.random() * 10)
    // turn input into CAPS
    let loudOutput = frontendJSON.input.toUpperCase()
    // send both back to frontend as JSON
    res.setHeader('Content-Type', 'application/json')
    res.json({ loud: loudOutput, randomnumber: randInt })
})


// Express Server
app.listen(3000, () => {
    console.log('Server started on: 3000')
})

