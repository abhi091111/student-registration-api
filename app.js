const express = require('express')
const mongoose = require('mongoose')
const student = require('./models/model.js')

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/studentdb", {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DataBase is Connected")
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.post('/student', async (req, res) => {
    try {
        console.log(req.body)
        const user = new student(req.body)
        const createUser = await user.save()
        res.send("Hello from other side")

    }
    catch (err) {
        console.log(err);
        res.send(err);
    }

})

app.listen(8000, () => {
    console.log("server listening to port 8000")
})


app.get('/student', async (req, res) => {
    try {
        const data = await student.find()
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})

app.get('/student/:ag', async (req, res) => {
    try {
        const a = Number(req.params.ag)
        const studentData = await student.find({ age: a })
        res.send(studentData)
    } catch (err) {
        res.send(err)
    }
})

app.patch('/student/:name', async (req, res) => {
    try {
        const name = req.params.name
        const updateData = await student.updateOne({ name: name }, req.body, { new: true })
        res.send(updateData)
    } catch (err) {
        res.send(err)
    }
})

app.delete('/student/:name', async (req, res) => {
    try {
        const name = req.params.name
        const deleteData = await student.deleteOne({ name: name })
        res.send(deleteData)
    } catch (err) {
        res.send(err)
    }
})