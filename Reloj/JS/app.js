const getHora = () =>{
    const fecha = new Date();


    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds(),
    };

    if(tiempo.hora >= 8 && tiempo.minuto >= 1 && tiempo.hora < 12){
        document.querySelector("#contSaludo").innerHTML= "Buenos Dias";
    }
    if(tiempo.hora >= 12 && tiempo.minuto >= 1 && tiempo.hora < 19){
        document.querySelector("#contSaludo").innerHTML= "Buenas Tardes";
    }
    if(tiempo.hora >= 19 && tiempo.minuto >= 1){
        document.querySelector("#contSaludo").innerHTML= "Buenas Noches";
    }
    const ahora = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`;

    //console.log(ahora)
    document.querySelector(".reloj").innerHTML = ahora; 


};
///getHora();



setInterval(getHora, 1000);