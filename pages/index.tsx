import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Intro from '../components/introductions'
import About from '../components/about'
import Projects from '../components/projects'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phyf3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.mobile_header} >
        <h1>Phyf3</h1>

        <Image 
          src="/images/menu-fill.svg" 
          alt = "menu bar" 
          width ={20} height={20} 
          className={styles.menu}
        />
      </header>
      <header className={styles.desktop_header} >
        <h1>Phyf3</h1>

        <ul>
          <li> <a href=""><span>01.</span> About</a> </li>
          <li> <a href=""><span>02.</span> Projects</a> </li>
          <li> <a href=""><span>03.</span> Contact</a> </li>
          <li> <a href="">Resume</a> </li>
        </ul>
      </header>

      <main className={styles.main}>
        <div className={styles.left} >
            <p> Phyf3script@gmail.com</p>
        </div>

        <div className={styles.content}>
          <Intro/>
          <About/>
          <Projects/>
        </div>
        

        <div className={styles.right}>
          <p> Phyf3script@gmail.com</p>
         </div>
      </main>

      {/* <main className={styles.main_desktop}>
        
        <div className={styles.middle}>
          <Intro/>
          <About/>
          <Projects/>
        </div>
       
      </main> */}
    </div>
  )
}

export default Home
