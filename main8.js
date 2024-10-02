//Eventos en DOM
//1.


// const list = document.getElementById("listaelem");
const listItems = document.querySelectorAll("ul li");
listItems.forEach(function(item){
    item.addEventListener("click", function() {
        console.log(item.textContent);
    });
});



function Deshabilitar(){
  const campo = document.getElementById("TextoHab")
  campo.disabled = true
}
function Habilitar(){
  const campo = document.getElementById("TextoHab")
  campo.disabled = false
}