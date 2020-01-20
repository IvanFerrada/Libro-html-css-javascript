console.log("el scrip funciona!!");
function iniciar(){
    maximo=600;
    medio = document.getElementById('medio');
    reproducir = document.getElementById('reproducir');
    barra = document.getElementById('barra');
    progreso = document.getElementById('progreso');
    
    reproducir.addEventListener('click',presionar,false);
    barra.addEventListener('click',mover,false);

}

iniciar();

function presionar(){
    if(!medio.paused && !medio.ended){
        medio.pause();
        reproducir.innerHTML='reproducir';
        window.clearInterval(bucle);


    }else{
        medio.play();
        reproducir.innerHTML=('pausa');
        bucle=setInterval(estado,1000);
    }
}

function estado(){
    if(!medio.ended){
        let total=parseInt(medio.currentTime*maximo/medio.duration);
        progreso.style.width=total+'px';

    }else{
        progreso.style.width='0px';
        reproducir.innerHTML='reproducir';
        window.clearInterval(bucle);
    }
}

function mover(e){
    if(!medio.paused && !medio.ended){
        let ratonX=e.pageX-barra.offsetleft;
        let nuevoTiempo=ratonX*medio.duration/maximo;
        medio.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
    }
}
window.addEventListener('load',iniciar,false);