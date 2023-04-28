import Layout from "../../componentes/Layout"
import Link   from 'next/Link'

export default function Nosotros({data})
{
	
	return(
	         <Layout>
			 
			       
				<h1>Listado de Post</h1>
			    {
				   data.map(({id,title,body})=>(
					   <div key={id}>
					   
						 <Link href={`/blog/${id}`}>
					 	   <a>{id}-{title}</a>
				         </Link>
					   
						 <p>{body}</p>
						 
					   
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











