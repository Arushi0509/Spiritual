import mongoose from "mongoose";
import validator from 'validator'

const CategorySchema = new mongoose.Schema({
    Id: {
        type: String,
        unique: true,
        required: [true, "Id is required."],
        validate: [validator.isNumeric, "Please enter valid ID."]
    },
    Name: {
        type: String,
        required: [true, "Category name is required."]
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

const CategoryData = mongoose.model("CategoryData", CategorySchema)

export { CategoryData }