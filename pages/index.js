import {useRouter} from 'next/router';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Gnb from '../src/components/Gnb';

export default function Home() {
  const router=useRouter();
  return (
    <div className={styles.container}>
      홉입니다
    </div>
  )
}
