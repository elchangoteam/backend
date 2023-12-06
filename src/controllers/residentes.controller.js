import { getConnection, sql, queries } from "../database";




export const verTodosLosResidentes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.verTodosLosResidentes);
    res.json(result.recordsets[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const crearNuevoResidente = async (req, res) => {
  const {
    Nombre,
    Apodo,
    Apellido,
    Dni,
    ObraSocial,
    NumeroDeAfiliado,
    Sexo,
    Nacionalidad,
    EstadoCivil,
    FechaDeAdm,
    FechaDeNac,
    UltimoDomicilio,    
    Planta,    
    Estado,
    Observaciones,   
  } = req.body; 
  try {
    const pool = await getConnection();
    const result = await pool
      .request()   
      .input("Nombre", sql.VarChar, Nombre)
      .input("Apellido", sql.VarChar, Apellido)
      .input("Apodo", sql.VarChar, Apodo)
      .input("Dni", sql.VarChar, Dni)
      .input("ObraSocial", sql.VarChar, ObraSocial)
      .input("NumeroDeAfiliado", sql.VarChar, NumeroDeAfiliado)
      .input("Sexo", sql.VarChar, Sexo)
      .input("Nacionalidad", sql.VarChar, Nacionalidad)
      .input("EstadoCivil", sql.VarChar, EstadoCivil)
      .input("FechaDeAdm", sql.Date, FechaDeAdm)
      .input("FechaDeNac", sql.Date, FechaDeNac)
      .input("UltimoDomicilio", sql.VarChar, UltimoDomicilio)     
      .input("Planta", sql.VarChar, Planta)
      .input("Estado", sql.VarChar, Estado)
      .input("Observaciones", sql.VarChar, Observaciones)
      .query(queries.crearNuevoResidente);
      console.log(result.recordset[0])
      res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.redirect("/error");
  }
};


export const actualizarResidente = async (req, res) => {
  const {
    Id,
    Nombre,
    Apodo,
    Apellido,
    Dni,
    ObraSocial,
    NumeroDeAfiliado,
    Sexo,
    Nacionalidad,
    EstadoCivil,
    FechaDeAdmision,
    FechaDeNacimiento,
    UltimoDomicilio,    
    Planta,    
    Estado,
    Observaciones,   
  } = req.body; 
  try {
    const pool = await getConnection();
    const result = await pool
      .request()   
      .input("Id", sql.Int, Id)
      .input("Nombre", sql.VarChar, Nombre)
      .input("Apellido", sql.VarChar, Apellido)
      .input("Apodo", sql.VarChar, Apodo)
      .input("Dni", sql.VarChar, Dni)
      .input("ObraSocial", sql.VarChar, ObraSocial)
      .input("NumeroDeAfiliado", sql.VarChar, NumeroDeAfiliado)
      .input("Sexo", sql.VarChar, Sexo)
      .input("Nacionalidad", sql.VarChar, Nacionalidad)
      .input("EstadoCivil", sql.VarChar, EstadoCivil)
      .input("FechaDeAdmision", sql.Date, FechaDeAdmision)
      .input("FechaDeNacimiento", sql.Date, FechaDeNacimiento)
      .input("UltimoDomicilio", sql.VarChar, UltimoDomicilio)
      .input("Planta", sql.VarChar, Planta)
      .input("Estado", sql.VarChar, Estado)
      .input("Observaciones", sql.VarChar, Observaciones)
      .query(queries.actualizarResidente);     
      res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.redirect("/error");
  }
};

export const verResidentePorId = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.verResidentePorId);

  res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deleteProductById);

  console.log(result);

  res.send(result);
};


export const subirArchivo = async(req, res) => {

    const {id} = req.body
    const nombre = req.file.filename
    const pool = await getConnection();
    const result = await pool
  .request()
  .input("Foto", sql.VarChar, nombre) 
  .input("Id", sql.Int, id) 
  .query(queries.subirFotoPerfil);
  
  res.json(nombre)


}