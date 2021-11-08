let today = new Date();

let hours = today.getHours();
if (hours < 12){
    var ampm = "AM";
}   else {
    var ampm = "PM";
    hours = hours - 12
}
if (hours == 0){
    hours = hours + 12
}
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let time = `${hours}:${minutes}:${seconds}:${ampm}`
document.getElementById('date-time').innerText=time;