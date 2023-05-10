import Layout from "../../componentes/Layout"
import Link   from 'next/Link'
import Movie  from "../Models/ModeloPeliculas"

export default function Peliculas({movies})
{
	
	return(
	         <Layout>
			 
			       
				<h1>Listado de Peliculas</h1>
			    {
				   movies.map(({_id,description,date,title})=>(
					   <div key={_id}>
					   
						 
					     <h3>{title}</h3>
						 <p>{description} <span>{date}</span></p>
						 
					   
					   </div>
				   
				   ))
                }   
			 
			 </Layout>
	)
	
}

//para paginas staticas
export async function getStaticProps()
{
//trabajar api
    try
	{
		const res=await fetch('http://jsonplaceholder.typicode.com/posts')
		const data=await res.json()
		return{
		  props:{data,},
		}
		
	}catch(error){
		console.log("el error es :", error)
	};
	
	
}


import conectarDB from '../lib/conectarDB'

export async function getServerSideProps()
{
//trabajar api
    try
	{
		await conectarDB()
		const res=await Movie.find({})//devuelve toda la coleccion
		console.log(res)
		const movies=res.map(doc=>{
			//convierto  en texto
			const movie=doc.toObject()
			movie._id=`${movie._id}`
			return movie
		})
		
		return:{props:{movies}}//va pq tiene quwe retorna algo
		                           //en mongo db
		
		
	}catch(error){
		console.log("el error es :", error)
	};
	
	
}












