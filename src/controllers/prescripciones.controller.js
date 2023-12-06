import { getConnection, sql, queries } from "../database";


export const verTodasLasPrescripciones = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .query(queries.verTodasLasPrescripciones);
      res.json(result.recordsets[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const verPrescripcionesPorResidente = async (req, res) => {
    try {
      const { id } = req.params;
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", id)
        .query(queries.verPrescripcionesPorResidente);
  
      res.send(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const verPrescripcionesPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", id)
        .query(queries.verPrescripcionesPorId);
  
      res.send(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const  crearPrescripcion = async (req, res) => {

    
     const {
      idResidente,
      idDroga,
      via,
      Desayuno,
      Almuerzo,
      Merienda,
      Cena,
      Observaciones,      
      EnPastillero,
      FechaPrescripcion,
      Dosis,
      FechaDeInicio,
      FechaDeFin,
      DiasString,
      TipoDeIndicacion,
      unidad,
      HorariosEspecificos,
      HorariosEspecificosEstado,
      Estado
    } = req.body;

   
    try {
      const pool = await getConnection();   
      console.log(req.body)    
      const result = await pool  
        .request()
        .input("IdResidente", sql.Int, idResidente)
        .input("IdMedicamento", sql.Int, idDroga)
        .input("Via", sql.Float, via)
        .input("TipoDeIndicacion", sql.VarChar, TipoDeIndicacion)
        .input("Unidad", sql.Float, unidad)
        .input("Desayuno", sql.Float, Desayuno)
        .input("Almuerzo", sql.Float, Almuerzo)
        .input("Merienda", sql.Float, Merienda)
        .input("Cena", sql.Float, Cena)
        .input("Dosis", sql.VarChar, Dosis)
        .input("FechaPrescripcion", sql.Date, FechaPrescripcion)
        .input("Dias", sql.VarChar, DiasString)
        .input("FechaDeInicio", sql.Date, FechaDeInicio)
        .input("FechaDeFin", sql.Date, FechaDeFin)
        .input("Observaciones", sql.VarChar, Observaciones)
        .input("EnPastillero", sql.Bit, EnPastillero)
        .input("HorariosEspecificos", sql.VarChar, JSON.stringify(HorariosEspecificos))
        .input("HorariosEspecificosEstado", sql.Bit, HorariosEspecificosEstado)
        .input("Estado", sql.VarChar, Estado)
        .query(queries.crearPrescripcion);
      res.json(result);
      console.log(result)
    } catch (error) {
      res.status(500);
      console.log(error)
    }

  };