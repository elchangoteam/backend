import { Router } from "express";
import {
  verTodasLasPrescripciones,
  verPrescripcionesPorResidente,
  verPrescripcionesPorId,
  crearPrescripcion, 
} from "../controllers/prescripciones.controller";

const router = Router();


//PRESCRIPCIONES
router.get("/prescripciones", verTodasLasPrescripciones);
router.get("/prescripciones/:id", verPrescripcionesPorResidente)
router.get("/prescripcioens/editar")
router.get("/prescripciones/editar/:id", verPrescripcionesPorId)
router.post("/prescripciones/", crearPrescripcion)


export default router;
