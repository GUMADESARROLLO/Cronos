/*INICIO DE LA FUNCIONES PARA LAS SESSIONES*/
$(document).ready(function(){

    if (!localStorage.getItem("isInit")) {
        localStorage.setItem("InitCronos", getDate());
        localStorage.setItem("isInit", true);
        live()
    }else{
        console.log(localStorage.getItem("InitCronos"));
        live();
    }
    function live(){
        control = setInterval(function(){
            $('#ttCall').text(calDate(localStorage.getItem("InitCronos"),getDate()));
        },10);
    }
});
function Death() {
    clearInterval(control);
    localStorage.setItem("InitCronos", getDate());
    localStorage.setItem("isInit", false);
    $('#ttCall').text("00:00:00");
}
function getDate(){
    var hoy = new Date();
    var dd = hoy.getDate(),mm = hoy.getMonth()+1,yyyy = hoy.getFullYear();
    var h = hoy.getHours(),i = hoy.getMinutes(),s=hoy.getSeconds();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    if(h<10) {h='0'+h}
    if(i<10) {i='0'+i}
    if(s<10) {s='0'+s}
    hoy = dd+'-'+mm+'-'+yyyy+ ' ' + h +':'+i+':'+s;
    return hoy;
}
function calDate(DateInit,DateNow){
    return(moment.utc(moment(DateNow,"DD-MM-YYYY HH:mm:ss").diff(moment(DateInit,"DD-MM-YYYY HH:mm:ss"))).format("HH:mm:ss"))
}


/*FIN DE LA FUNCIONES PARA LAS SESSIONES*/
/*INICIO DE LA FUNIONES DE CRONOMETRO*/



var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
    control = setInterval(cronometro,10);

    $("#inicio").hide();
    $("#parar").show();




}
function parar () {
    $("#parar").hide();
    $("#inicio").show();
    clearInterval(control);



}
function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}
function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML = horas;
    }
}



/*FIN DE LA FUNIONES DE CRONOMETRO*/