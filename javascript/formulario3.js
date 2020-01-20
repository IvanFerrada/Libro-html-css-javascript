console.log('activo');

function iniciar(){
    edad=document.getElementById('miedad');
    edad.addEventListener('change',cambiarrango,false);
    document.informacion.addEventListener('invalid',validacion,true);
    document.getElementById('enviar').addEventListener('click',enviar,false);
    document.informacion.addEventListener('input',controlar,false);
}
function cambiarrango(){
    let salida=document.getElementById('rango');
    let calc=edad.value=20;
    if(calc < 20){
        calc=0;
        edad.value=20;

    }
    salida.innerHTML=calc+' a ' +edad.value;
}
function validacion(e){
    let elemento=e.target;
    elemento.Style.background='#00FF00';
    
}
function enviar(){
    let elemento=document.getElementById('usuario');
    let valido=document.informacion.checkValidity();
    if(valido){
        document.informacion.submit();
    }else{
        alert("el nombre de usuario debe tener minimo 3 caracteres");
    }
}
function controlar(e){
    let elemento=e.target;
    if(elemento.validity.valid){
        elemento.Style.background='#FF0000';
    }else{
        elemento.Style.background='#FFFF00';
    }
}
iniciar();

