const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    mobile: {
        type: Number,
        required: true,
        min: 10,
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                console.log("Error")
            }
        }
    },
    age: {
        type: Number,
        required: true,

    }
})

module.exports = studentSchema
