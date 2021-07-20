import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Placeholder from '../components/Placeholder';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Client Test: POC#1
        </h1>

        <Placeholder text={'Oh what a world'} />
        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
