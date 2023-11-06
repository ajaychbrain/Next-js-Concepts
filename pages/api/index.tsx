import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  class: string,
  age: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 
{
  res.status(200).json({ name: 'Ajay  Choudhary', class: 'MCA Fifth Semester', age: 26 })
}
