//Operadores lógicos y condicionales

//1.
let e = 30;
let f = 10;
let g = 40;
if(e>f && e>g){
  console.log("El mayor de los tres numeros es " + e);
}else if(f>g && f>e){
  console.log("El mayor de los tres numeros es " + f);
}else if(g>f && g>f){
  console.log("El mayor de los tres numeros es " + g);
}

//2.
let NroParOImpar = prompt("Ingrese un Numero y te dire si es par o impar");
if(NroParOImpar % 2 == 0){
  console.log("El numero "+NroParOImpar+" es par")
}else{
  console.log("El numero "+NroParOImpar+" es impar")

}
