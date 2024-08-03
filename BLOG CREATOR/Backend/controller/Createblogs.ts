import { Request, Response } from "express";
import { BlogData } from "../models/Blogs";

const postBlog = async (req: Request, res: Response) => {
    
    try {
        let Id = Math.floor((Math.random() * 1000))

        const Name = req.headers.Name
        
       const { Category, Timetag, Headline, Description} = req.body
        const blog = await BlogData.create({
            Id, Name, Category, Timetag, Headline, Description
        })
        
        res.status(200).json({ blog })
    }
    catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}


export { postBlog }