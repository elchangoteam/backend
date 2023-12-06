import { Router } from "express";
import { 
  verTodasLasUnidades,
  verTodasLasVias,
  verTodosLosVademecum,
  verVademecumPorId,
} from "../controllers/vademecum.controller";

const router = Router();


//VADEMECUM
router.get("/vademecum/", verTodosLosVademecum)
router.get("/vademecum/vias/", verTodasLasVias)
router.get("/vademecum/unidades/:id", verTodasLasUnidades )
router.get("/vademecum/:id", verVademecumPorId)




export default router;
