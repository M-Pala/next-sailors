import { blogs } from "../../../data/blog";

export default function handler(req, res){
    const {blogId} = req.query
    if(req.method === 'GET'){
        const blog = blogs.find((blog)=> blog.id === parseInt(blogId))
        if(blog){
            res.status(200).json(blog)
        }
        else{
            res.status(500).json({ error: 'failed to load data' })
        }
    }
} 