import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { UserData } from '../models/User'
import { Request, Response } from 'express';

const login = async(req: Request, res: Response) => {
    // console.log(2);

    console.log(req.body);

    if (!req.body.UserName) {
        res.status(400).send("Username is required	")
        res.end()
    }
    else if (!req.body.Password) {
        res.status(422).send("Password is required")
        res.end()
    }

    else{

        let d = await UserData.findOne({UserName: req.body.UserName, Password: req.body.Password})
        
        if(d){
            let user = {Id: d.Id, UserName: d.UserName}

            let data = jwt.sign(user, `${process.env.SECRET_KEY}`, {expiresIn: '1h'})
            
            console.log(user);
            console.log(data);
            res.cookie("userdata", data)
            res.status(200).json({
                "data": {
                    user,
                    "accessToken": data
                }
            })
        }
        else {
            res.status(401).send("Invalid user credentials")
        }
    }
}

export { login }