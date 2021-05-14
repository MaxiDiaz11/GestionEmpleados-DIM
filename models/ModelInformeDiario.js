const client = require("../data/ConexionDB");
// client.connect();

module.exports = {
  async imprimirInformeDiario() {
    try {
      const resultado = {
        grupo: [
          {
            codigo: 1,
            tipo_template: "TEMPLATE_ORDENANZAS",
            nombre: "DIRECCION DE INGRESOS MUNICIPALES",
            subgrupo: [
              {
                codigo: 100,
                tipo_template: "TEMPLATE_ORDENANZAS",
                nombre_subgrupo: "Ordenanzas",
                empleados: [
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 8,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 18,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 3,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 2,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 39,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 79,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 69,
                    nro_afiliado: 25561,
                    apellido: "JUAN",
                    nombre: "Alvaro Eugenio",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                ],
              },
            ],
          },
          {
            codigo: 3,
            tipo_template: "TEMPLATE_FISCALIZACION",
            nombre: "Fiscalizacion",
            empleados: [
              {
                id_usuario: 2,
                nro_afiliado: 17992,
                apellido: "Achavar",
                nombre: "Antonio P.",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 3,
                nro_afiliado: 17992,
                apellido: "Achavar",
                nombre: "Antonio P.",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 3,
                nro_afiliado: 17992,
                apellido: "Achavar",
                nombre: "Antonio P.",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 3,
                nro_afiliado: 17992,
                apellido: "Achavar",
                nombre: "Antonio P.",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 3,
                nro_afiliado: 17992,
                apellido: "Achavar",
                nombre: "Antonio P.",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 4,
                nro_afiliado: 23062,
                apellido: "Campos",
                nombre: "Ana Maria",
                sucursal: 1,
                dcto_exp: 1,
                observacion: "S/O",
                horario_laboral: "8 a 13 hs",
              },
              {
                id_usuario: 5,
                nro_afiliado: 21667,
                apellido: "Maidana",
                nombre: "Susana",
                sucursal: 2,
                dcto_exp: 1255,
                observacion: "DCTO 1255/SG",
                horario_laboral: "8 a 13 hs",
              },
            ],
          },
          {
            codigo: 2,
            tipo_template: "TEMPLATE_CONTRATOS_TEMPORARIOS",
            nombre: "DIRECCION DE INGRESOS MUNICIPALES",
            subgrupo: [
              {
                codigo: 200,
                tipo_template: "TEMPLATE_CONTRATOS_TEMPORARIOS",
                nombre_subgrupo: "Contratos temporarios",
                empleados: [
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Contreras",
                    nombre: "Alvaro Eugenio",
                    sucursal: 1,
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },
                ],
              },
            ],
          },

          {
            codigo: 4,
            tipo_template: "TEMPLATE_GENERAL",
            nombre: "Departamento General",
            subgrupo: [
              {
                codigo: 500,
                tipo_template: "TEMPLATE_GENERAL_SUB1",
                nombre_subgrupo: "Ordenanzas municipales",
                empleados: [  
                  {
                    id_usuario: 1,
                    nro_afiliado: 25561,
                    apellido: "Julian",
                    nombre: "Alvaro",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },      
                ],
              },
              {
                codigo: 700,
                tipo_template: "TEMPLATE_GENERAL_SUB2",
                nombre_subgrupo: "Cobranzas",
                empleados: [  
                  {
                    id_usuario: 2,
                    nro_afiliado: 25561,
                    apellido: "Diaz",
                    nombre: "Maxi",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },      
                ],
              },
              {
                codigo: 800,
                tipo_template: "TEMPLATE_GENERAL_SUB3",
                nombre_subgrupo: "Informatica",
                empleados: [  
                  {
                    id_usuario: 3,
                    nro_afiliado: 25561,
                    apellido: "asfo",
                    nombre: "Franco",
                    dcto_exp: 1,
                    observacion: "subsecretario",
                    horario_laboral: "8 a 13 hs",
                  },      
                ],
              },
            ],
          },

        ],
      };

      // const empleadosFiscalizacion = await client.query(
      //   "select * from empleados where id_grupo=1"
      // );
      // const empleadosSeccionLibreDeudas = await client.query(
      //   "select * from empleados where id_grupo=4"
      // );

      // grupoFiscalizacion.push({"fiscalizacion": empleadosFiscalizacion});
      // console
      // //  console.log(empleadosFiscalizacion.rows)
      // //  let resultado = {
      // //    "Fiscalizacion": empleadosFiscalizacion.rows
      // //  }
      // // grupoFiscalizacion.push(resultado);
      // //  console.log(grupoFiscalizacion)
      // gruposResultado.push(empleadosFiscalizacion.rows);
      // gruposResultado.push(empleadosSeccionLibreDeudas.rows);
      // console.log(gruposResultado);
      return {
        // empleados: gruposResultado,
        resultado,
      };
    } catch (error) {
      return {
        success: false,
        mensaje: "Error interno al realizar la peticion al servidor",
        errors: error,
      };
    }
  },
};
