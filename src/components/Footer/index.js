import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function Footer(){
  return(

    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaWrapper}>
            <div className={styles.logo}>
            <Link href="">
                <a>Pizza</a>
              </Link>
            </div>
            <div className={styles.icon}>
            <div className={styles.socialLink}>
              <Link href="/" target="_blank">
                <a><FaFacebook/></a>
              </Link>             
            </div>
            <div className={styles.socialLink}>
              <Link href="/" target="_blank">
                <a><FaInstagram/></a>
              </Link>             
            </div>
            <div className={styles.socialLink}>
              <Link href="/" target="_blank" >
                <a><FaWhatsapp/></a>
              </Link>             
            </div>
            </div>           
             
          </div>
          
        </div>
      </div>
    </footer>
  )
}