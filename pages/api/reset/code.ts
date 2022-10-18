import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async(req:NextApiRequest,res:NextApiResponse) =>  {

  const body = JSON.parse(req.body);
  if(body.email === 'isaarg2312@gmail.com' && body.code === '123456' ){
      
      res.status(200).json({success:true,token:"sdf6s5d4f6s"});
  } else {
    res.status(401).json({ success: false })
  }
  
}

export default handler;