import mongoose from 'mongoose'


const URI-MONGO=porccess.env.URI_MONGO

const conectarDB=async()=>{
  try{
	  
	  await mongoose.connect(porcess.env.URI-MONGO{
		  
		  
	  })
	  
	  console.log('mongo db conectado')
	  
  }catch(error){
     console.log(error)
	 porccess.exit;
  }
}


export default conectarDB