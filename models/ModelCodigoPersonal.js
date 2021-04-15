const client = require('../data/ConexionDB');
client.connect();

module.exports = {
  async insertarCodigoEmpleado(codigo, descripcion, habilitado) {
    const resultado = await client
      .query(
        `insert into codigo_personal(codigo, descripcion, habilitado)
        values($1,$2,$3)`,
        [codigo, descripcion, habilitado]
      )
      .then((response) => {
        console.log(response.rows);
        client.end();
      })
      .catch((err) => {
        client.end();
      });
  },
  async obtenerListadoDeCodigos() {
    try {
      const resultado = await client.query(`select * from codigo_personal`);
      return resultado;
    } catch (error) {
      return {
        success: false,
        mensaje: 'Error interno al realizar la peticion al servidor',
        errors: error,
      };
    }
  },
  async obtenerCodigoEmpleadoPorId(id_codigoPersonal) {
    try {
      const resultado = await client.query(
        `select * from codigo_personal where id_codigo_personal = $1`,
        [id_codigoPersonal]
      );
      return resultado;
    } catch (error) {
      return {
        success: false,
        mensaje: 'Error interno al realizar la peticion al servidor',
        errors: error,
      };
    }
  },
  async actualizarCodigoEmpleado(codigo, descripcion, habilitado, id) {
    try {
      const resultado = await client.query(
        `update codigo_personal
      set codigo = $1,
      descripcion = $2,
      habilitado = $3
      where id_codigo_personal = $4
      `,
        [codigo, descripcion, habilitado, id]
      );
      return {
        resultado: resultado,
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        mensaje: 'Error interno al realizar la peticion al servidor',
        errors: error,
      };
    }
  },
  async eliminarCodigoEmpleado(id_codigoPersonal) {
    try {
      const resultado = await client.query(
        `delete from codigo_personal where id_codigo_personal=$1`,
        [id_codigoPersonal]
      );
      return resultado;
    } catch (error) {
      return {
        success: false,
        mensaje: 'Error interno al realizar la peticion al servidor',
        errors: error,
      };
    }
  },
};

// ``
