import express from "express"
import clienteController from "../controllers/clienteController"

const router =express.Router();

router
  .route("/")
  .get(clienteController.getcliente)
  .post(clienteController.createcliente);

router
  .route("/:id")
  .put(clienteController.updatecliente)
  .delete(clienteController.deletecliente);
export default router;