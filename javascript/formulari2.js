
function iniciar(){
    edad=document.getElementById(',miedad');
    edad.addEvendListener('change',cambiarrango,false);
    document.informacion.addEvendListener('invalid',validacion,true);
    document.getElementById('enviar').addEvendListener('click',enviar,false);
}
function cambiarrango(){
    let salida=document.getElementById('rango');
    let calc=edad.value-20;
    if(calc <20){
        calc=0;
        edad.value=20;
    }
    salida.innerHTML=calc+' a' + edad.value;
}
function validacion(){
    let elemento=e.target;
    elemento.Style.backgrount='#FFDDDD';
}
function enviar(){
    let enviar=document.informacion.checkVlidity();
    if(valido){
        document.informacion.submit();
    }
}
window.addEvendListener('load',iniciar,false);
