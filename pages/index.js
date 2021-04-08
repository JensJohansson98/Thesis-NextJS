import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>

        <p className={styles.description}>
          This is the first example of the application made in NextJS, used in my Thesis.
        </p>

      </main>

      <footer className={styles.footer}>
        <p>
          Application Made by Jens Johansson
        </p>
      </footer>
    </div>
  )
}
