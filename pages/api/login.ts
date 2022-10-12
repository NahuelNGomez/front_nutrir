import type { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '../../src/utils/withIronSession';

type Data = {
  name: string
}

const handler = async(req:NextApiRequest,res:NextApiResponse) =>  {

  const body = JSON.parse(req.body);
  if(body.email === 'isaarg2312@gmail.com' && body.password === '123456'){
      req.session.user = {
        name: "Isaias Diaz",
		  	email: "isaarg2312@gmail.com",
		  	logged: true
      }

      await req.session.save();

      res.status(200).json({success:true});
  }

  res.status(401).json({ success: false })
}

export default withSessionRoute(handler);