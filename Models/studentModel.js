import mongoose from "mongoose";



const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type : String,
        required: true,
    },
    isFaculty : {
        type: Boolean,
        requierd: true
    }
})


const student = mongoose.model('student', studentSchema)

export default student;


