import { Schema,model } from "mongoose";

const empeladoSchema = new Schema(
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
        puesto:{
            type:String
        },
        fecha_contratacion:{
            type:Date
        },
        salario:{
            type:Number
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
 export default model ("empleado ",empeladoSchema)