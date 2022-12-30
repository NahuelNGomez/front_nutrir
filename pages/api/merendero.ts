import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await fetch("http://50.116.44.91:3600/comedor/1", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'sessionid': 'g3g7alde70euyxwpj2mokmsso3frklhi',
                'csrftoken': '20WcdmYe7QyRiERlpblsyHwHIalmXKKP'
            },
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json(error)
    }

};

export default handler;