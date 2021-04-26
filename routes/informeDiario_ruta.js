const express = require("express");
const modelInformeDiario = require("../models/ModelInformeDiario");

const router = express.Router();

router.get("/generarInforme", async (req, res) => {
  resultado = await modelInformeDiario.imprimirInformeDiario();
  if (resultado.success == false) {
    res.status(500).json({
      error: resultado.mensaje,
      success: resultado.success,
    });
  } else {
    console.log(resultado);
    res.status(200).json({
      grupos: resultado.resultado,
      success: true,
      mensaje: "OK",
    });
  }
});
module.exports = router;
