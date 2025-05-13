const clienteController={}
import clienteModel from "../models/cliente"

clienteController.getcliente=async(req,res)=>{
const cliente=await clienteModel.find();
res.json(cliente)
}
clienteController.createcliente=async(req,res)=>{
const {nombre,correo,telefono,direccion,activo}=req.body;
const newcliente= new clienteModel({nombre,correo,telefono,direccion,activo})
await newcliente.save()
res.json({message:"client save"})
}
clienteController.deletecliente = async (req, res) => {
const deletecliente = await clienteModel.findByIdAndDelete(req.params.id);
if (!deletecliente) {
return res.status(404).json({ message: "client dont find" });
}
res.json({ message: "client deleted" });
};
clienteController.updateCliente = async (req, res) => {

    const {nombre,correo,telefono,direccion,puesto,fecha_contratacion,salario,activo} = req.body;

    await clienteModel.findByIdAndUpdate(
      req.params.id,
      {nombre,correo,telefono,direccion,activo},
      { new: true }
    );
    res.json({ message: "client update" });
  };
export default employeeController;