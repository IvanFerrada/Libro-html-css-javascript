// querrySelector()
/*
function hacerclick(){
    document.querySelector("#principal p:frist-child").onclick=mostrarAlerta;
}

function mostrarAlerta(){
    alert("hizo click");

}
window.onload=hacerclick;
*/


//querrySelectorAll()
/*

function hacerclick (){
    var lista=document.querySelectorAll("#principal p");
    lista [0].onclick=mostrarAlerta;    
}
function mostrarAlerta(){
    alert("hizo click");

}
window.onload=hacerclick;

*/

// querrySelectorAll() con bucle for


function hacerclick(){
    var lista =document.querySelectorAll("#principal p");
    for(var f = 0; f < lista.length; f++){
        lista[f].onclick=mostrarAlerta;
        console.log("Se activo la funcion Hizo click!!");
    }
}
function mostrarAlerta(){
    alert("hizo click");
}
window.onload=hacerclick;
