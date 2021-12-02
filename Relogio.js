function hours(){
    let horas = document.getElementById("texto");
    function time(){
        let date = new Date()
        horas.innerHTML = date.toLocaleTimeString();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        document.getElementById("horas").style.transform = "rotate(" + (hrs*30 + mins*0.5) +"deg)";
        document.getElementById("minutos").style.transform = "rotate(" + (mins*6 + secs*0.1) +"deg)";
        document.getElementById("segundos").style.transform = "rotate(" + (secs*6) +"deg)";

    }
    setInterval(time, 1000);
};

hours();
