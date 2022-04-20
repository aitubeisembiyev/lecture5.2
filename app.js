const express = require('express')
const bodyparser=require('body-parser')
const port = 3000

const app=express()

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})
app.post('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})
app.get('/qwe', (req, res) => {
    res.sendFile(__dirname+'/index2.html')
})
app.post('/qwe', (req, res) => {
    res.sendFile(__dirname+'/index2.html')
})
app.get('/bmicalc',((req, res) => {
    res.sendFile(__dirname+'/bmicalc.html')
}))

app.post('/bmicalc',((req, res) => {
    res.sendFile(__dirname+'/bmicalc.html')
}))


app.listen(port, function (){
    console.log(`app launched at http://localhost:${port}`)
})