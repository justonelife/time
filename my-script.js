const vnHH = document.getElementById("vn-hh");
const vnMH = document.getElementById("vn-mh");
const vnSH = document.getElementById("vn-sh");
const usaHH = document.getElementById("usa-hh");
const usaMH = document.getElementById("usa-mh");
const usaSH = document.getElementById("usa-sh");
const cnHH = document.getElementById("cn-hh");
const cnMH = document.getElementById("cn-mh");
const cnSH = document.getElementById("cn-sh");
const countriesList = ["clock-vietnam","clock-usa","clock-cn"];

function getVnTime() {
    const now = new Date();
    var hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

    const secondDegree = (second - 45) * 6;
    vnSH.style.transform = `translate(-50%, -50%) rotate(${secondDegree}deg)`;

    const minuteDegree = (minute - 45) * 6;
    vnMH.style.transform = `translate(-50%, -50%) rotate(${minuteDegree}deg)`;

    const hourDegree = (hour % 12 - 9) * 30 + (minute % 60) * 0.5;
    vnHH.style.transform = `translate(-50%, -50%) rotate(${hourDegree}deg)`;
}

function getUsaTime() {
    const now = new Date();
    var hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

    const secondDegree = (second - 45) * 6;
    usaSH.style.transform = `translate(-50%, -50%) rotate(${secondDegree}deg)`;

    const minuteDegree = (minute - 45) * 6;
    usaMH.style.transform = `translate(-50%, -50%) rotate(${minuteDegree}deg)`;

    const hourDegree = ((hour - 13) % 12 - 9) * 30 + (minute % 60) * 0.5;
    usaHH.style.transform = `translate(-50%, -50%) rotate(${hourDegree}deg)`;
}

function getCnTime() {
    const now = new Date();
    var hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

    const secondDegree = (second - 45) * 6;
    cnSH.style.transform = `translate(-50%, -50%) rotate(${secondDegree}deg)`;

    const minuteDegree = (minute - 45) * 6;
    cnMH.style.transform = `translate(-50%, -50%) rotate(${minuteDegree}deg)`;

    const hourDegree = ((hour + 1) % 12 - 9) * 30 + (minute % 60) * 0.5;
    cnHH.style.transform = `translate(-50%, -50%) rotate(${hourDegree}deg)`;
}

setInterval(getVnTime, 1000);
setInterval(getUsaTime, 1000);
setInterval(getCnTime, 1000);

function changeDivPosition(bid) {
    if (document.getElementById(bid).style.display == 'none') {
        for (var i = 0; i < countriesList.length; i++) {
            document.getElementById(countriesList[i]).style.display = 'none';
        }
        document.getElementById(bid).style.display = 'unset';
    } else {
        document.getElementById(bid).style.display = 'none';
    }
    console.log("button clicked");
}