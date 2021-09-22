// @flow 
import { FormEvent } from 'react';
import styles from '../styles/LoginPage.module.css';
import { http } from '../util/http';

const loginPage = () => {

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        //obtem as entradas dos campos
        const username  = (document.querySelector('username') as HTMLInputElement).value;
        const password  = (document.querySelector('password') as HTMLInputElement).value;

        //requisicao HTTP para API de geração de token (localhost:3000/login) usando o AXIOS - npm install axios --save
        http.post(login)

    }
    
    return (
        <form>
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