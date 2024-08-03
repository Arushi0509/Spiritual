import jwt from 'jsonwebtoken'
import { UserData } from '../models/User'
import { BlogData } from '../models/Blogs';

const Auth = (req: any, res: any, next: any) => {
    console.log(req.cookies.userdata);

    jwt.verify(req.cookies.userdata, `${process.env.SECRET_KEY}`, async (err: any, data: any) => {
        if (err) throw err

        else {
            // console.log(data.Id);

            // let userdet = await BlogData.find({User_Id: data.Id})
            let user = await UserData.findOne({ Id: data.Id })

            console.log(data.FullName);



            if (user) {
                req.headers = { ...req.headers, Id: data.Id, Name: data.UserName }
                console.log(req.headers);
                
                next()
            }

        }


    })
}

export { Auth }