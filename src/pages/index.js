import Head from 'next/head'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'


import {productData} from '../components/Products/data'
import {productDataTwo} from '../components/Products/data'

export default function Home() {
  return (
      <div>
      <Head>
        <title>Home | Pizzaria </title>
    
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Hero/>
      <Products  heading ="Promoções do dia" data={productData}/>
      <Feature/>
      <Products  heading ="Nossos sabores tradicionais " data={productDataTwo}/>
      <Footer/>
    </div>
  )
}
