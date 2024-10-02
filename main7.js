//Introducción al DOM
//1.
function cambiarColor(){
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'blue';
    });
};
//2.
  function mostrarAlerta(){
  const textoIngresado = document.getElementById('texto').value;
      alert("Has ingresado: " + textoIngresado);
  };
