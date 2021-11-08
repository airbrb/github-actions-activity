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
hours = addZero(hours)
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());

function addZero(num){
    return num < 10 ? `0${num}`:num;
}

let time = `${hours}:${minutes}:${seconds} ${ampm}`
document.getElementById('time').innerText=time;

exports.time = time;