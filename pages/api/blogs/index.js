import { blogs } from "../../../data/blog";

export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(blogs)
    }
}