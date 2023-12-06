import { getConnection, sql, queries } from "../database";


export const verVademecumPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.verVademecumPorId);

    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const verTodosLosVademecum = async (req, res) => {
  try {
    
    const pool = await getConnection();

    const result = await pool
      .request()
      
      .query(queries.verTodosLosVademecum);

    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const verTodasLasVias = async (req, res) => {
  try {
    
    const pool = await getConnection();

    const result = await pool
      .request()
      
      .query(queries.verTodasLasVias);

    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const verTodasLasUnidades = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.verUnidadPorIdDroga);

    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};