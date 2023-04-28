import Layout from "../../componentes/Layout"

export default function primerPost({data})
{
	
	return(
	         <Layout>
			  
			     <h1>{data.id}-{data-title}</h1>
				 <p>{data.body}</p>
				 
					 
				   
				   
			)
				  
		</Layout>
	)
	
}

//para paginas dinamicas
export async function getStaticPaths()
{
//trabajar api
    try
	{
		const res=await fetch('http://jsonplaceholder.typicode.com/posts')
		const data=await res.json()
		const paths=data.map(({id})=>({params:{id:`$(id)`}}))
		/*id entre comillas simple
		 para convertilo en texto plano*/
		return{
		  paths,
		  fallback:false
		}
		
	}catch(error){
		console.log("el error es :", error)
	};
	
	
}


export async function getStaticProps({params})
{
//trabajar api
    try
	{
		const res=await fetch('http://jsonplaceholder.typicode.com/posts'+params.id)
		const data=await res.json()
		return{
		  props:{data}
		}
		
	}catch(error){
		console.log("el error es :", error)
	};
	
	
}









