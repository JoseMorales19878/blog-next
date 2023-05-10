import mongoose from 'mongoose'


const PeliculasSchema=new.mogoose.Schema(
{
	
  description:
  {
	  type:String,
	  require:[true,"ingrese valor"]
  },
  date:{
	  type:String,
	  require:[true,"ingrese valor"]
  },
  
  title:{
	  type:String,
	  require:[true,"ingrese valor"]
  }

})

export default mongoose.models.Movie || mongoose.model('Movie',PeliculasSchema)
//mongoose.models.Movie valida si existe el modelo Movie es el valor que 
//le di dentro de parentesis despues ||