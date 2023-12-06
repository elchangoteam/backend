import express, { urlencoded } from "express";
import config  from './config';
const cors = require('cors');

import residentesRouter from './routes/residentes.routes'
import prescripcionesRouter from './routes/prescripciones.routes'
import vademecumRouter from './routes/vademecum.routes'
import responsablesRouter from './routes/responsables.router'


const app = express();


app.set('port', config.port || 3000);


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(residentesRouter)
app.use(prescripcionesRouter)
app.use(vademecumRouter)
app.use(responsablesRouter)


export default app