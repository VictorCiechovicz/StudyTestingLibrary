import Image from 'next/image'
import styles from './page.module.css'
import Login from '@/components/Login'
import Logo from '../assets/testing-library.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={Logo} width={600} height={300} alt="logo" />
      <Login />
    </main>
  )
}
