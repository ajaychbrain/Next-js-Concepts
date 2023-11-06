// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { commentss } from '@/data/comments'
import type { NextApiRequest, NextApiResponse } from 'next'

interface newComment {
 
  name: string
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
if(req.method === 'GET'){
  res.status(200).json({commentss})
}
else if(req.method ==='POST'){
  console.log(req.body , 'reqbody')
  const commet = req.body.commet;
  const newCommet: newComment = {
    id: Date.now(),
    name: commet,
    
    }
    console.log(newCommet)
   commentss.push(newCommet)
   res.status(201).json(newCommet);
    // console.log(commentss)
  }
}