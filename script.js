let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML=`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // calculo dos segundos
    let mDeg = ((360 / 60) * minute) - 90; // calculo dos minutos
    let hDeg = ((360 / 12) * hour) - 90; // calculo das horas

    sElement.style.transform = `rotate(${sDeg}deg)`; //faz a rotação dos segundos
    mElement.style.transform = `rotate(${mDeg}deg)`; // faz a rotação dos minutos
    hElement.style.transform = `rotate(${hDeg}deg)`; // faz a rotação das horas
}


function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();