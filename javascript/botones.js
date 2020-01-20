

// formulario
let email=document.getElementById('f');

function enviarmail(){
    console.log(email);

}


function enviarclick(){

    let enviar =Document.getElementById('enviar1');  
    enviar.addEventListener('click',enviarmail,false);

}
enviarclick();




















// formilario





function mostrar(){alert("boton1");}
function mostrar2(){alert("boton2");}
function mostrar3(){alert("boton3");}
function mostrar4(){alert("boton4");}



function click(){
    let elemento1= document.getElementById('boton1');
    elemento1.addEventListener('click',mostrar,false)
}
click();


function click2(){
    let elemento2 = document.getElementById('boton2');
    elemento2.addEventListener('click',mostrar2,false);
}
click2();

function click3(){
    let elemento3 = document.getElementById('boton3');
    elemento3.addEventListener('click',mostrar3,false);
}
click3();

function click4(){
    let elemento4 = document.getElementById('boton4');
    elemento4.addEventListener('click',mostrar4,false);
}
click4();

