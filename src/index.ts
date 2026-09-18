import express from "express";

const PORT = 8000
const app = express()

app.get('/', (req, res) => {
    res.json('Hello World!')
    console.log('Hello from frontEnd!')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})