import multer from 'multer'
import path from 'path'

const url = "C:/Users/El Pipo/Desktop/Gestor/frontend/public/img/"

//Procesador de imagenes
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, url)
    },
    filename: (req, file, cb) =>{
        if(req.body.tipo === "Perfil"){
            var ext = path.extname(file.originalname);
        cb(null,req.body.id+"-"+req.body.tipo+"-"+req.body.nombre+"-"+req.body.apellido+Date.now()+ext)}

        else{
            cb(null, file.originalname)}

        }
    }
)

export const uploader = multer({storage:storage})