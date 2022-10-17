import type { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../src/utils/withIronSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    req.session.destroy();

    res.redirect("/");
  } catch (e) {
    res.json(e);
  }
};

export default withSessionRoute(handler);
