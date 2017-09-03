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
            $('#Horas').text(calDate(localStorage.getItem("InitCronos"),getDate()));
        },10);
    }
});
function Death() {
    clearInterval(control);
    localStorage.setItem("InitCronos", getDate());
    localStorage.setItem("isInit", false);
    $('#Horas').text("00:00:00");
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

