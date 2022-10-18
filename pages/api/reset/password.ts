import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async(req:NextApiRequest,res:NextApiResponse) =>  {

  const body = JSON.parse(req.body);
  if(body.token === 'sdf6s5d4f6s' ){
    if(body.password !== body.confirm_password){
        res.status(500).json({errors:{confirm_password:'INVALID'}});
    }else{
        res.status(200).json({success:true});
    }     
  } else {
    res.status(401).json({ success: false })
  }
  
}

export default handler;