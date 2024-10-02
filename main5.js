//Objetos en JavaScript
//1.
let persona = {
    nombre: "Matias",
    edad: 20,
    Ciudad: "Mendoza",
    CambiarCiudad: function(nuevaCiudad){
      this.Ciudad = nuevaCiudad
    }
  }
  persona.CambiarCiudad("San Juan")
  console.log(persona)
  //2.
  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    EsAntiguo: function(){
      if(2024 - this.año > 10){
        return true
      }else{
        return false
      }
    }
  }
  console.log("El libro \"El Quijote\" es antiguo: " + libro.EsAntiguo())
  