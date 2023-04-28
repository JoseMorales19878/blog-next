import Head from 'next/head'
import Link from 'next/Link'
import styles from "../Styles/Layout.module.css"

export default function Layout({children,title,description})
{
	
	return(
	         <div className={styles.container}>
			   <Head>
			   
			     <title>{title}</title>
				 <meta content={description}/>
			   
			   </Head>
			 
			   <nav>
			   
			     <Link href="/">Inicio</Link>
				 <Link href="/Contacto">Contacto</Link>
				 <Link href="/Nosotros">Nosotros</Link>
			   
			   </nav>
			   
			   <main>{children}</main>
			   
			   <footer></footer>
			 
			 </div>
	)
	
}


Layout.defaultProps={
  title:"nest mi primer sitio web",
  description:"descripcion de mi sitio web",
  
  
}