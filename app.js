// Get UI

const hourel = document.querySelector(`.hour`);
const minuteel = document.querySelector(`.minute`);
const secondel = document.querySelector(`.second`);

    // Method1
// function clock(){
//     var now = new Date();
//     // console.log(now);  
//                     // h m s ms / 1000 
//     var gettime = now.getHours() * 3600+
//                   now.getMinutes() * 60 + now.getSeconds() *1 +
//                   now.getMilliseconds() / 1000;
//     // console.log(gettime);

//     // change time into degree
//                         // minute/ 24hr to 12hr/
//     var hours = gettime / 60 / 12 * 6;
//     var minutes = gettime /60 * 6;
//     var seconds = gettime *6;
//     // console.log(hours,minutes,seconds);

//     hourel.style.transform =`rotate(${hours}deg)`;
//     minuteel.style.transform =`rotate(${minutes}deg)`;
//     secondel.style.transform =`rotate(${seconds}deg)`;
    
// }

// // clock();

// // setInterval(clock,1000);
// setInterval(clock,50);

function setclock(){
    const now = new Date();
    // console.log(date);
    const hours = now.getHours();
    const getcvhours=hours%12; //convert to 12 format
    console.log(getcvhours);
    // console.log(hours);
    const minutes = now.getMinutes();
    // console.log(minutes);
    const seconds = now.getSeconds();
    // console.log(seconds);

    // Method 2
    // setrotation(hourel,hours/12);
    // setrotation(minuteel,minutes/12);
    // setrotation(secondel,seconds/12);

    // Method 3

    secondel.style.transform = `rotate(${scale(seconds,0,60,0,360)}deg)`;
    minuteel.style.transform = `rotate(${scale(minutes,0,60,0,360)}deg)`;
    hourel.style.transform = `rotate(${scale(getcvhours,0,12,0,360)}deg)`;

}

function setrotation(handitem,rotation){
    // console.log(handitem,rotation);
    handitem.style.setProperty('--myrotation',rotation * 360);
}

const scale= function scale(number,inmin,inmmax,outmin,outmax){
    return (number-inmin) * (outmax-outmin) / (inmmax-inmin) + outmin;
}


setclock();
setInterval(setclock,1000);

// function scale(number,inmin,inmmax,outmin,outmax){
//     return (number-inmin) * (outmax-outmin) / (inmmax-inmin) + outmin;
// }
