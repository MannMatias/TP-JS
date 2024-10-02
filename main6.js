//Arrays
//1.
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log("Números originales: "+numeros);
for(let j = 0; j<10; j++){
    numeros[j] = numeros[j]*2
}
console.log("Números multiplicados por 2: "+numeros);
//2.
let pares=[];

for(let j = 2; j<=20; j++){
  if(j%2==0){
    pares.push(j);
  }
}

console.log("Primeros 10 números pares: "+pares)
