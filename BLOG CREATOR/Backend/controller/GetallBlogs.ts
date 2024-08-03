import { Request, Response } from 'express'
import { BlogData } from '../models/Blogs'

const getallBlogs = async (req: Request, res: Response) => {

    try {
        
        const blogs = await BlogData.find()
        res.status(200).json({
            blogs,
            message: "Blogs fetched successfully",
            success: true
        })
    }

    catch (err: any) {

        res.status(404).json({
            message: err.message
        })
    }

}

export { getallBlogs }
