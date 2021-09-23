import type { NextPage } from 'next'
import { useAuthHttp } from '../hooks/useAuthHttp'
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  const { data, error } = useAuthHttp('user');
  return data ? <div>Hello World</div> : null;
};

//define qual pagina sera renderizada
export default Home
