
import styles from './styles.module.scss'

export default function Products({heading, data}){
  return(

    <div className={styles.container}>
      <div className={styles.header}>
        {heading}

      </div>
      <div className={styles.wrapper}>
        {data.map((product, index)=>{
          return(
            <div 
            className={styles.card}
            key={index}>
              <img
             
              src={product.img} 
              alt={product.alt}
              />
            <div className={styles.infor}>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <h3>{product.price}</h3>
              
              <button>{product.button}</button>
            </div>


            </div>
          )
        })}

      </div>
    </div>
  )
}