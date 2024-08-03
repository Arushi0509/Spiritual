import { Request, Response } from "express";
import { BlogData } from "../models/Blogs";
import { UserData } from "../models/User";

const getbyId = async (req: Request, res: Response) => {

    
    try {
        let currUser = req.headers.Name
    
        const blogs = await BlogData.find({ Name: currUser })
        res.status(200).json({
            blogs
        })
        console.log(blogs);
        
    }
    catch (err: any) {
        res.status(404).send("Data not found for the Id.")
        res.end()
    }

}

export { getbyId }