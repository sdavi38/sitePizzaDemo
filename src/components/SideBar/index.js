import styles from './styles.module.scss'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'

export default function SideBar(){
  const [isOpen, setIsOpen] = useState(false)

  function openSideBar(){
    setIsOpen()

  }
  return(

    <aside className={styles.container}>
      <div className={styles.icon}>
        <FaTimes onClick={()=>{openSideBar}}>
          </FaTimes>
      </div>

      <ul className={styles.menu}>
        <li className="link">Pizza</li>
        <li className="link">Desserts</li>
        <li className="link">Full Menu</li>
      </ul>
      <div className={styles.button}>

      </div>

    </aside>
  )
}