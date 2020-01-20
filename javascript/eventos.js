// El metodo addEventListener()

function mostrarAlerta(){
    alert("hizo click");
}
function hacerclick(){
    var elemento=document.getElementsByTagName('p') [0];
    elemento.addEventListener('click', mostrarAlerta,false);
}
window.addEventListener('load',hacerclick,false);