const clock = document.querySelector("h2#clock");



function getClock(){
    const christmasEve = new Date('December 25, 2021 00:00:00');
    const date = new Date();
    const dDayTime = (christmasEve - date) / 1000;
    const day = String(Math.floor(dDayTime/ 3600 / 24)).padStart(2,"0");
    const hours =  String(Math.abs((christmasEve.getHours()-date.getHours()))).padStart(2,"0");
    const minutes = String(Math.abs((christmasEve.getMinutes()-date.getMinutes()))).padStart(2,"0");
    const seconds = String(Math.abs((christmasEve.getSeconds()-date.getSeconds()))).padStart(2,"0");
    clock.innerText = `${day}:${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);