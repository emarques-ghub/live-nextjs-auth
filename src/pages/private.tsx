// @flow 

// import { paserCookies } from "../util/cookies";
// import { GetServerSideProps, NextPage } from "next";
// import { isTokenExpired } from "../util/auth";
import { NextPage } from "next";
import { http } from "../util/http"; 
import { withAuth } from "../hof/withAuth";

interface PrivatePageProps {
    name: string;
    payload: any
}

const PrivatePage: NextPage<PrivatePageProps> = (props) => {
    console.log(props.payload);
    return (
        <div>
            Pagina Privada {props.name}          
        </div>
    );
};

export default PrivatePage;

// pagina so acessivel se recebeu token
// funcao de 1a ordem HOF (high order function) - funcao que recebe uma funcao como parametro e retorna 
// tambem uma funcao - isso deixa o codigo mais limpo e essa funcao de autenticacao pode ser usada em varias
// paginas - qq mudanca na authenticacao agora sera feito na HOF\withAuth

export const getServerSideProps = 
  withAuth( async (ctx: any, cookies: any, payload: any) => {
    const { data } = await http.get("test-auth2", {
        headers: {
            Authorization: `Bearer ${cookies.token}`
            },
    });
    return {
        props: data, 
    };
});

//o codigo comentado abaixo foi substituido pela funcao de 1a ordem acima

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const cookies = paserCookies(ctx.req);
//     console.log(cookies);
//     console.log(isTokenExpired(cookies.token)); 
//     //se nao tem o cookie do token ou esta expirado, redireciona para pagina de login
//     if(!cookies.token || isTokenExpired(cookies.token)) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/login",
//             },
//         };
//     }
    //se tudo ok, segue

//     //como exemplo, acessa a API de autorizacao passando o header com o token
//     // o try captura se houve retorno 403 (nao autenticado) ou 401 (bloqueado)
// //    try {
//         const { data } = await http.get("test-auth2", {
//             headers: {
//                 Authorization: `Bearer ${cookies.token}`
//                 }
//         });
// /*
//     } catch (e) {
//         if (
//             axios.isAxisError(e) &&
//             (e.response?.status === 401 || e.response?.status === 403)
//         ) {
//             //se 403 ou 401, retorna para login
//             return {
//                 redirect: {
//                     permanent: false,
//                     destination: "/login",
//                 },
//             }; 
//         }

//         throw(e);
//     }
// */

//     return {
//         props: data, 
//     };

//};