import { getConnection, sql, queries } from "../database";

export const verResponsablePorResidente = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.verResponsablePorResidente);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const verResponsablePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.verResponsablePorId);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearNuevoResponsable = async (req, res) => {
  const {
    ResidenteId,
    Nombre,
    Apellido,
    Direccion,
    Email,
    Nacionalidad,
    Dni,
    Telefono,
    Profesion,
    Parentesco,
    FechaDeNacimiento,
    Sexo,
    EstadoCivil,
    Principal,
  } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("ResidenteId", sql.Int, ResidenteId)
      .input("Nombre", sql.VarChar, Nombre)
      .input("Apellido", sql.VarChar, Apellido)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Email", sql.VarChar, Email)
      .input("Nacionalidad", sql.VarChar, Nacionalidad)
      .input("Dni", sql.VarChar, Dni)
      .input("Telefono", sql.VarChar, Telefono)
      .input("Profesion", sql.VarChar, Profesion)
      .input("Parentesco", sql.VarChar, Parentesco)
      .input("FechaDeNacimiento", sql.Date, FechaDeNacimiento)
      .input("Sexo", sql.VarChar, Sexo)
      .input("EstadoCivil", sql.VarChar, EstadoCivil)
      .input("Principal", sql.Bit, Principal)
      .query(queries.crearNuevoResponsable);
    res.json(result);
  } catch (error) {
    res.status(500);
  }
};

export const actualizarResponsable = async (req, res) => {
  const {
    ResponsableId,
    Nombre,
    Apellido,
    Direccion,
    Email,
    Nacionalidad,
    Dni,
    Telefono,
    Profesion,
    Parentesco,
    FechaDeNacimiento,
    Sexo,
    EstadoCivil,
    Principal,
  } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("ResponsableId", sql.Int, ResponsableId)
      .input("Nombre", sql.VarChar, Nombre)
      .input("Apellido", sql.VarChar, Apellido)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Email", sql.VarChar, Email)
      .input("Nacionalidad", sql.VarChar, Nacionalidad)
      .input("Dni", sql.VarChar, Dni)
      .input("Telefono", sql.VarChar, Telefono)
      .input("Profesion", sql.VarChar, Profesion)
      .input("Parentesco", sql.VarChar, Parentesco)
      .input("FechaDeNacimiento", sql.Date, FechaDeNacimiento)
      .input("Sexo", sql.VarChar, Sexo)
      .input("EstadoCivil", sql.VarChar, EstadoCivil)
      .input("Principal", sql.Bit, Principal)
      .query(queries.actualizarResponsable);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
  }
};

export const borrarResponsable = async (req, res) => {
  const { ResponsableId } = req.body;

  try {
   
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("ResponsableId", sql.Int, ResponsableId)
      .query(queries.eliminarResponsable);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
  }
};
