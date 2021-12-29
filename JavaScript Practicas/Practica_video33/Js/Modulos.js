import saludar,{Saludar, PI, usuario} from "./Constantes.js"
import {aritmetica as calculos} from "./Aritmetica.js"


console.log("Archivos Modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3,4));
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
Saludar();
let saludo=new Saludar()
saludo;