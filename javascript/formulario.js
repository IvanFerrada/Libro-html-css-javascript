
function iniciar(){
    nombre1=document.getElementById('nombre');
    nombre2=document.getElementById('apellido');
    nombre1.addEventListener('input',validacion,false);
    nombre2.addEventListener('input',validacion,false);
    validacion();
}
function validacion(){
    if(nombre1.value=='' && nombre2.value==''){
        nombre1.setCustomValidity('inserte al menos un nombre');
        nombre1.Style.background='#FFDDDD';
    }else{
        nombre1.setCustomValidity('');
        nombre1.Style.background='#FFFFFF';
    }
}
window.addEventListener('load',iniciar,false);



