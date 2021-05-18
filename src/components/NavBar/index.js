import Link from 'next/link'
import {FaPizzaSlice, FaFacebook, FaWhatsapp,FaInstagram} from 'react-icons/fa'
import styles from './styles.module.scss'

export default function NavBar() {
  return(
    <div className={ styles.container}>
      
        <div className={styles.icon}>
            <div className={styles.socialLink}>
                        
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

        <div className={styles.navLink}>
          <Link href="/pizza">
          <a>Pizza</a>
          </Link>
        </div>

      
       <div className={styles.navIcon}>
        <p>Menu</p>
        <div className={styles.bars}>
          <FaPizzaSlice/>
        </div>

       </div>
       </div>
     
    </div>
  )
}