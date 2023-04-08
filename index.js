const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // root
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {     // Backend API server created
    const {name} =req.params        // same as const p = req.params     p.name 
    console.log(name)

    if(name == "dog") {
        res.json({'sound': 'Woof'})
    }
    else if(name == "cat") {
        res.json({'sound': 'Meow'})
    }
    else{
        res.json({'sound': "I don't know it's sounds"})
    }
    
})  


app.get('/user/:id', (req, res) => {    
    const p = req.params;    // Youtube users +++... cannot create every time -> use parameters to create each user's
    console.log(p.id)

    const q = req.query;        // Query [Key:value]
    console.log(q)
    console.log(q.name)

    res.send({'userId': q.name});
})

app.use(express.json());
app.post('/user/:id', (req, res) => {
    const p = req.params;
    console.log(p);
    const b = req.body;
    console.log(b);

    res.send({'message': 'Hello World!'});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})