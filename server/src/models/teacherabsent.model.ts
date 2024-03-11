import mongoose from "mongoose";

interface TeacherAbsentInterface extends mongoose.Document {
    teachers: string[],
    rooms: string[],
    day: string,
    createdAt: string,
    updatedAt: string
}

const teacherAbsentSchema = new mongoose.Schema({
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "room"
    }],
    day: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true,
    expireAfterSeconds: 86400
})

const TeacherAbsent = mongoose.model<TeacherAbsentInterface>("teacherabsent", teacherAbsentSchema)

export {
    TeacherAbsentInterface,
    TeacherAbsent
}