import mongoose from "mongoose";
import validator from 'validator'
import { UserData } from "../models/User";

const postuser = async (req: any, res: any) => {

    console.log(2);
    
   
    const Email = await UserData.findOne({ EmailId: req.body.EmailId })
    const Username = await UserData.findOne({ UserName: req.body.UserName })
// let Id = Math.floor((Math.random() * 1000))

    // if (!req.body.Id) {
    //     res.status(422).send("Id is required.")
    //     res.end()
    // }
    // else if (ID) {
    //     res.status(409).send("User with this ID already exists.")
    //     res.end()
    // }
    // else if (!validator.isNumeric(req.body.Id)) {
    //     res.status(422).send("Id is Invalid.")
    //     res.end()
    // }
    if (!req.body.FullName) {
        res.status(422).send("FullName is required.")
        res.end()
    }
    else if(!req.body.EmailId){
        res.status(422).send("EmailId is required.")
        res.end()
    }
    else if (!validator.isEmail(req.body.EmailId)) {
        res.status(422).send("EmailId is Invalid.")
        res.end()
    }
    else if (Email) {
        res.status(409).send("User with this EmailID already exists.")
        res.end()
    }
    else if (!req.body.UserName) {
        res.status(422).send("UserName is required.")
        res.end()
    }
    else if (!validator.isLowercase(req.body.UserName)) {
        res.status(422).send("UserName should be in lowercase.")
        res.end()
    }
    else if (Username) {
        res.status(409).send("User with this UserName already exists.")
        res.end()
    }
    else if (!req.body.Password) {
        res.status(422).send("Password is required.")
        res.end()
    }
    else if (!validator.isStrongPassword(req.body.Password)) {
        res.status(409).send("Invalid Password.")
        res.end()
    }
    else {

        try {

            let Id = Math.floor((Math.random() * 1000))
            const { FullName, EmailId, UserName, Password, CPassword } = req.body

            const user = await UserData.create({
                 Id, FullName, EmailId, UserName, Password, CPassword
            })
            res.status(201).json({
                "data": {
                    user
                }
            })
        }
        catch (err: any) {
            res.send(404).json({
                message: err.message
            })
        }
    }
}

export { postuser }