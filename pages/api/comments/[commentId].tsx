import { commentss } from "@/data/comments";
import type { NextApiRequest, NextApiResponse } from 'next'
import { comment } from "postcss";

type commentId = number

export default function handler( req: NextApiRequest, res: NextApiResponse ) {

    const {commentId} = req.query;
//    const comment = commentss.find((comment)=> comment.id === parseInt(commentId))
    console.log(commentss)
    res.status(200).json(comment)

}