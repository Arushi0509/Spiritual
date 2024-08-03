import mongoose from 'mongoose'
import validator from 'validator'

const BlogSchema = new mongoose.Schema({

    Id: {
        type: String,
        unique: true,
        required: [true, "Id is required."],
        validate: [validator.isNumeric, "Please enter valid ID."]
    },
    Name:{
        type: String,
        ref: 'UserData'
    },
    Category: {
        type: String,
        ref: 'CategoryData'
    },
    Timetag: {
        type: String,
        required: [true, "Timetag is required."]
    },
    Headline: {
        type: String,
        required: [true, "Headline is required."]
    },
    Description: {
        type: String,
        required: [true, "Description is required."]
    },
    CreatedBy: {
        type: String,
        default: "Arushi"
    },
    ModifiedBy: {
        type: String,
        default: "Arushi"
    },
    CreatedAt: {
        type: Date,
        default: new Date
    },
    ModifiedAt: {
        type: Date,
        default: new Date
    }
}, { timestamps: true })

const BlogData = mongoose.model("BlogData", BlogSchema)

export { BlogData }
