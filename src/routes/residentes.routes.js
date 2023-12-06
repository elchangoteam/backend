import { Router } from "express";
import {
  crearNuevoResidente,
  deleteProductById,
  verTodosLosResidentes,
  verResidentePorId,
  actualizarResidente,
  subirArchivo,  
} from "../controllers/residentes.controller";
import { uploader } from "../utils";


const router = Router();

//RESIDENTES
router.get("/residentes", verTodosLosResidentes);
router.post("/residentes",  uploader.single('foto') , crearNuevoResidente);
router.get("/residentes/:id", verResidentePorId);
router.delete("/residentes/:id", deleteProductById);
router.put("/residentes", actualizarResidente);
router.post("/subirArchivo", uploader.single('files') , subirArchivo);


export default router;
