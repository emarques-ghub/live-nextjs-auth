// @flow 
import { FormEvent } from 'react';
import styles from '../styles/LoginPage.module.css';
import { setCookie } from '../util/cookies';
import { http } from '../util/http';
import { useRouter } from 'next/dist/client/router';

const loginPage = () => {

    //react hooks - para lidar com os componentes
    const router = useRouter();


    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        //obtem as entradas dos campos
        const username = (document.querySelector('#username') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;

        //requisicao HTTP para API de geração de token (POST http://localhost:3000/login) 
        //usando o AXIOS - npm install axios --save
        const { data } = await http.post("login", { username, password });
        console.log(data);
        setCookie('token', data.token);
        router.push('/private')
    }
    
    return (
        <form method="post" onSubmit={onSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="username">Usuário: </label>
                <input type="text" id="username" name="username" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Senha: </label>
                <input type="text" id="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default loginPage