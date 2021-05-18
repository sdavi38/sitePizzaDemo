import '../styles/global.scss'
import styles from '../styles/app.module.scss';
import NavBar from '../components/NavBar'
import ShoppingCar from '../components/ShoppingCar';



function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className={styles.appWrapper}>
    <main>
       <NavBar/>
       <Component {...pageProps} />
    </main> 
    
   


   
    
    </div>
    </>
  )

 
}

export default MyApp
