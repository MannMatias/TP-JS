//Funciones de JavaScript
//1.
function EsPar(j){
    if(j%2==0){
      return true
    }else{
      return false
    }
  }
  let j = 16;
  console.log("El número",j,"es par:", EsPar(j))
  
  //2.
  function convertirCelsiusAFahrenheit(temp){
    temp = temp * 1.8 + 32;
    return temp
  }
  
  console.log("20°C son equivalentes a "+convertirCelsiusAFahrenheit(20)+" F°")
  