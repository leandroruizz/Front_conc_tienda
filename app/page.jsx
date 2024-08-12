import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


function HomePage() {
  return (
    <main className={styles.home}>
      <h1 className={styles.tituloproducto}>PRODUCTOS NUEVOS</h1>
      <div className={styles.contproducto}>
        <Link href='/shop'><img className={styles.producto} src="catalogo/picadarth.jpg"/></Link>
        <Link href='/shop'><img className={styles.producto} src="catalogo/bongcalavera.jpeg"/></Link>
        <Link href='/shop'><img className={styles.producto} src="catalogo/cenicerorawclasico.jpeg"/></Link>
      </div>
      <div className={styles.contasesoramiento}>
      <h1 className={styles.tituloasesoramiento}>ASESORAMIENTO</h1>
        <div className={styles.asesoramiento}>
            <p className={styles.textoasesoramiento}><marker className={styles.greenallday}>Asesoramos</marker> y te <marker className={styles.greenallday}>acompañamos</marker> desde la semilla hasta la flor. </p>
            <img className={styles.asesoramientoimg} src="images/asesoramientoimg.png" alt="" />
        </div>
      </div>
      <div id='nosotros' className={styles.quienessomos}>
        <h1 className={styles.titulonosotros}>¿QUIENES SOMOS?</h1>
        <p className={styles.textonosotros}><marker className={styles.greenallday}>GREEN ALL DAY</marker> nace en conjunto de dos mentes amigas que de pasiones comparten el cultivo, asi nacio la idea de abrir este proyecto para que cada cultivador tenga a dispocision los mejores sumistros y asesoramiento al alcance de sus manos.</p>
      </div>
    </main>
  )
}

export default HomePage