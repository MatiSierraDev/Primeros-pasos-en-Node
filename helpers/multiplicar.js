const fs = require('fs');
const colors = require("colors");

const getMultiplicar = async (base = 5, listar = false, hasta = 10) => {

  try {
    const getTabla = (a, base) => {
      let resultado = base * a;
      let salidaArray , consolaArray  = ""
      return ([
        (consolaArray = `${base} ${"x".green} ${a} ${"=".green} ${resultado}\n`),
        (salidaArray = `${base} x ${a} = ${resultado}\n`)]
      );
    };

    let INICIO = 1,
      FINAL = hasta,
      BASE = base;
      salida = "",
      consola = "";

    for (INICIO = 0; INICIO <= FINAL; INICIO++) {
      let [consolaArray, salidaArray] = getTabla(INICIO, BASE);
      consola += consolaArray;
      salida += salidaArray;
    }

    if(listar){
      console.log(consola);
    } else {
      return;
    }

    fs.writeFileSync(`./salida/tabla-${BASE}.txt`, salida);
    return console.log(`tabla-${BASE}.txt creado`.bgYellow)

  } catch (error) {
    throw error
  }
};


module.exports = {
  getMultiplicar
}
