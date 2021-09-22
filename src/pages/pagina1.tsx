// @flow 
//import * as React from 'react';
//type Props = {
//    
//};

//exemplo de pagina dinamica
import { GetServerSideProps } from "next";

//export const Pagina1Page  = (props: Props) => {
    const Pagina1Page  = ({name}: {name: string}) => {
        return (
        <div>
            Hello Pagina1 - {name}
        </div>
    );
};

export default Pagina1Page;
//http://localhost:3000/pagina1

//aqui fica o codigo executado dinamicamente, e pode ser colocado um acesso a DB, uma chamada a API externa, é como se fosse o backend do frontend e o resultado é transferido como propriedade no return
export const getServerSideProps: GetServerSideProps = async(ctx) => {
    return {
        props: {
            name: 'Eduardo'
        }
    }
};