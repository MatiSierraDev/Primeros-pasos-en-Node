const { getMultiplicar } = require('./helpers/multiplicar')
const { argvYargs } = require("./config/yargs");

const colors = require("colors");

console.clear()

let base = argvYargs.b;
let listar = argvYargs.l;
let hasta = argvYargs.h;

if(base <= 0 || base === null && !listar){
  console.log('Debe ingresar una base mayor a 0'.red)
  return;
} else {
  getMultiplicar(base, listar, hasta)
    .then((data) => console.log(data))
    .catch((error) => error)
}