import { Schema,model } from "mongoose";
const peliculaSchema = new Schema(
    {
        tiulo:{
            type:String
        },
        descripcion:{
            type:String
        },
        director:{
            type:String
        },
        genero:{
            type:String
        },
        año:{
            type:Number
        },
        duracion:{
            type:Number
        },
        imagen:{
            type:String
        }
    },
    {
        timestamps:true,
        strict:false
    }
 )
 export default model ("pelicula",peliculaSchema)