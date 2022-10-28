import type { NextApiRequest, NextApiResponse } from 'next'
import { withSessionRoute } from '../../src/utils/withIronSession';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>  {

  const body = JSON.parse(req.body);
  if(body.email === 'isaarg2312@gmail.com' && body.password === '123456'){
      req.session.user = {
        user:"isa95Arg",
        name: "Isaias Diaz",
		  	email: "isaarg2312@gmail.com",
        phone:"+5492944550116",
		  	logged: true
      }

      await req.session.save();

      res.status(200).json({success:true});
  } else {
    res.status(401).json({ success: false })
  }
  
}

export default withSessionRoute(handler);