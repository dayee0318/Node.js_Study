const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // root
    res.send('Hello World!')
})

app.get('/dog', (req, res) => { // routing
    res.json({'sound' : 'Woof'}) // API created
})

app.get('/cat', (req, res) => { // routing
    res.json({'sound' : 'Meow'}) // json(Java Script Object Notation)
})

app.get('/user/:id', (req, res) => {    
    const p = req.params;    // Youtube users +++... cannot create every time -> use parameters to create each user's
    console.log(p.id)

    const q = req.query;        // Query [Key:value]
    console.log(q)
    console.log(q.name)

    res.send({'userId': q.name});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})