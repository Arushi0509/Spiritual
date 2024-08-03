import mongoosse from 'mongoose'
import validator from 'validator'


const UserSchema = new mongoosse.Schema({

    Id: {
        type: String,
        unique: true,
        required: [true, "Id is required."],
        validate: [validator.isNumeric, "Please enter valid ID."]
    },
    FullName: {
        type: String,
        required: [true, "FullName is required."]
    },
    EmailId: {
        type: String,
        unique: true,
        required: [true, "EmailId is required."],
        validate: [validator.isEmail, "Please enter a valid EmailId"]
    },
    UserName: {
        type: String,
        unique: true,
        required: [true, "UserName is required."],
        validate: [validator.isLowercase, "UserName should be in lowercase."]
    },
    Password: {
        type: String,
        required: [true, "Password is required."],
        validate: [validator.isStrongPassword, "Please enter a valid Password."]
    },
    CPassword:{
        type: String,
        required: [true, "CPassword is required."],
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

const UserData = mongoosse.model("UserData", UserSchema)

export { UserData }