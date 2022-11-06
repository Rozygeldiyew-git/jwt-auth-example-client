import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main} >
        <div className={styles.loginCard} >
          <form method="post" className={styles.form}>
            <label htmlFor="email">
              <input type="email" name="email" id="email" placeholder='Email' className={styles.email} />
            </label>
            <label htmlFor="password">
              <input type="password" name="password" id="password" placeholder='Password' className={styles.password} />
            </label>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      </main>

    </div>
  )
}
