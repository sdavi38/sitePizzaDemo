
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import styles from  './styles.module.scss'


export default function Hero() {
  return(
    <div className={styles.container}>
    <NavBar/>
    <SideBar/>
    <div className={styles.content}>
      <div className={styles.items}>
        <h1>A melhor pizza  da região </h1>
        <p>Pronta em 60 minutos</p>
        <button>Peça Agora</button>
      </div>

    </div>

    </div>
  )
}