var dataAttuale = new Date();
console.log(Date());
document.write(dataAttuale);
var estraiData = dataAttuale.getMonth();
var estraiData2 = dataAttuale.getDay();
document.getElementById('es1').innerHTML = "il mese di oggi è: " + estraiData;
document.write('<br>' + estraiData2);
var formatoEuropeo = new Date('2022-02-21');
document.getElementById('es2').innerHTML = "la data di oggi è: " + formatoEuropeo;
var formatoEuropeo2 = formatoEuropeo.getDay();

document.getElementById('es3').innerHTML = "il formato europeo è: " + dataAttuale.toLocaleString();

//orologio digitale

function orologio(){
    var oggi = new Date();
    var ore = oggi.getHours(); // 0 - 23
    var minuti = oggi.getMinutes(); // 0 - 59
    var secondi = oggi.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(ore == 0){
        ore = 12;
    }
    
    if(ore > 12){
        ore = ore - 12;
        session = "PM";
    }
    
    ore = (ore < 10) ? "0" + ore : ore;
    minuti = (minuti < 10) ? "0" + minuti : minuti;
    secondi = (secondi < 10) ? "0" + secondi : secondi;
    
    var time = ore + ":" + minuti + ":" + secondi + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(orologio, 1000);
    
}

orologio();

