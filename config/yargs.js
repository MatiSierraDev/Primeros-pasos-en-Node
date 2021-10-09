const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { argv } = require("yargs");
const colors = require("colors");

const argvYargs = yargs(hideBin(process.argv))
      .options({
        b: {
          alias: "base",
          demandOption: true,
          type: "number",
          describe: "Es la base de la tabla a multiplicar"
        },
        l: {
          alias: "listar",
          default: false,
          type: "boolean",
          describe: "Muestra la lista en consola"
        },
        h:{
          alias:"Hasta",
          default:10,
          type:'number',
          describe:"Muestra la tablas hasta el numero ingresado",
        }
      })
      .check((argv, options) => {
        const whatType = argv.b;
        const list = argv.l;

        if (isNaN(whatType)) {
          throw new Error("Solo se aceptan valores numericos".underline.red);
        } else if (!list) {
          throw new Error("No puede ver la lista si es falso".underline.red);
        } else {
          return true;
        }
      }).argv;

module.exports = {
  argvYargs
}