const mongoose = require("mongoose")
const studentSchema = require("./studentSchema")
const student = new mongoose.model("student", studentSchema)

module.exports = student