import {Schema,model} from "mongoose"

 const clienteSchema = new Schema(
    {
        nombre:{
            type:String
        },
        correo:{
            type:String
        },
        telefono:{
            type:String
        },
        direccion:{
            type:String
        },
        activo:{
            type:Boolean
        }
    },
    {
        timestamps:true,
        strict:false
    }
 )
 export default model ("cliente",clienteSchema)