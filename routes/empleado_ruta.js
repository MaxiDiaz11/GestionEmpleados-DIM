const express = require('express');
const router = express.Router();
const empleadoModel = require('../models/ModelEmpleado');

router.get('/obtenerEmpleados', async (req, res) => {
  resultado = await empleadoModel.obtenerListadoDeEmpleados();
  resultado.success == false
    ? res.status(500).json({error: resultado.mensaje})
    : res.status(200).json({
        empleado: resultado.rows,
        cant_reg: resultado.rows.length,
        success: true,
        mensaje: 'OK',
      });
});

router.get('/obtenerEmpleadoPorID/:id', async (req, res) => {
  resultado = await empleadoModel.obtenerEmpleadoPorId(req.params.id);
  resultado.success == false || resultado.rows.length == 0
    ? res.status(500).json({
        error: resultado.mensaje,
        success: false,
        mensaje: 'ERROR',
      })
    : res.status(200).json({
        empleado: resultado.rows[0],
        success: true,
        mensaje: 'OK',
      });
});

router.delete('/eliminar/:id', async (req, res) => {
  resultado = await empleadoModel.eliminarEmpleado(req.params.id);
  resultado.success == false
    ? res.status(500).json({
        error: resultado.mensaje,
        success: false,
        mensaje: 'ERROR',
      })
    : res.status(200).json({
        success: true,
        mensaje: 'OK, empleado eliminado con exito',
      });
});

 router.put('/actualizar/:id', async(req,res) =>{
     const id = req.params.id;
     const{
         nro_afiliado,
         apellido,
         nombre,
         sucursal,
         dcto_exp,
         observacion,
         horarioLaboralDesde,
         horarioLaboralHasta,
         fecha_ingreso,
         fechaSalida,
         idCodigoPersonal,
         idGrupo} = req.body;
         console.log(req.body)
     if(id && apellido && nombre && nro_afiliado  ){
     resultado = await empleadoModel.actualizarEmpleado(
         nro_afiliado,
         apellido,
         nombre,
         sucursal,
         dcto_exp,
         observacion,
         horarioLaboralDesde,
         horarioLaboralHasta,
         fecha_ingreso,
         fechaSalida,
         idCodigoPersonal,
         idGrupo,
         id);
     resultado.success == false
     ? res.status(500).json({
         error: resultado.mensaje,
         success: false,
         mensaje: 'ERROR',
       })
     : res.status(200).json({
         success: true,
         mensaje: 'OK, empleado modificado con exito',
       });
     } else {
         return res.status(500).json({
             success: false,
             mensaje: 'ERROR',
         })
     }
 })

module.exports = router;
