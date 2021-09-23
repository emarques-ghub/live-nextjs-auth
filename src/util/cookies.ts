import Cookies, { CookieAttributes } from 'js-cookie';
import cookie from 'cookie';

export function setCookie(key: string, value: string | object, options?: CookieAttributes) {
    Cookies.set( key, value, {
        secure: process.env.NODE_ENV === 'production' ? true : false,
    });
}

export function paserCookies(req?: any) {
    if(!req || !req.headers) {
        return {};
    }
    return cookie.parse(req.headers.cookie || "");
}

export function getCookie (key: string) {
    return Cookies.get(key);
}