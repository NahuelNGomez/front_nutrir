import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';
import config from '../constants/config';

declare module 'iron-session' {
	interface IronSessionData {
		user?: {
			user?:string;
			name?: string;
			email?: string;
			profile_picture?: string;
			phone?:string;
			logged?: boolean;
		};
	}
}

export const sessionOptions = {
	password: '!b898z$4%sGmK^FycenLZ#1i0d8A7BGO',
	cookieName: 'nutri_app',
	cookieOptions: {
		secure: false
	}
};

export function withSessionRoute(handler: NextApiHandler) {
	return withIronSessionApiRoute(handler, sessionOptions);
}