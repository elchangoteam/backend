import { Router } from "express";
import {
  actualizarResponsable,
  borrarResponsable,
  crearNuevoResponsable,
  verResponsablePorId,
  verResponsablePorResidente,
} from "../controllers/responsables.controller";

const router = Router();


// RESPONSABLES
router.get("/responsables/:id", verResponsablePorResidente);
router.get("/responsables/editar/:id", verResponsablePorId)
router.post("/responsables", crearNuevoResponsable);
router.put('/responsables/editar/:id', actualizarResponsable)
router.delete('/responsables/borrar/:id', borrarResponsable)



export default router;
