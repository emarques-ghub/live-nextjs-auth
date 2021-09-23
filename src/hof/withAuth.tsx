import { getPayload, isTokenExpired } from "../util/auth";
import { paserCookies } from "../util/cookies";

export function withAuth(func: any) {
    return async (ctx: any) => {

        const cookies = paserCookies(ctx.req);
        console.log(cookies);
        console.log(isTokenExpired(cookies.token)); 
        //se nao tem o cookie do token ou esta expirado, redireciona para pagina de login
        if(!cookies.token || isTokenExpired(cookies.token)) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/login",
                },
            };
        }
        const payload = getPayload(cookies.token);
        //retorna getServerSideProps
        const result = await func(ctx, cookies, payload);
        if("props" in result) {
            result.props = {
                payload,
                ...result.props,
            };
        }
        return result;
    };
}