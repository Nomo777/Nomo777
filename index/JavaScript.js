
/*
Autor:keyla reumoza 
*/
document.addEventListener("keydown",function(event){

        const Vvvya = document.getElementById("Texto");

        const elemento = document.getElementById("Cuerpo");


if(event.key ==="w"){

Vvvya.innerHTML = "ouuuyeaaa";

    elemento.classList.toggle("Cuerpo00");

}

if(event.key ==="d"){

Vvvya.innerHTML = "abrazito";
    elemento.classList.toggle("Cuerpo01");

}
if(event.key ==="a"){
    elemento.classList.toggle("Cuerpo02");

}
  
});


