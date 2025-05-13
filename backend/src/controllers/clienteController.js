const clienteController={}
import clienteModel from "../models/cliente"

clienteController.getcliente=async(req,res)=>{
    const cliente=await clienteModel.find();
    res.json(cliente)
}
clienteController.createcliente=async(req,res)=>{
    const {nombre,correo,telefono,direccion,puesto,fecha_contratacion,salario,activo}=req.body;
clienteController.getcliente=async(req,res)=>{
    const cliente=await clienteModel.find();
    res.json(cliente)
}