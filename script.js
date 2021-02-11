function TurnOn() {
    document.getElementById("image1").src='images/turn_on.png';
    document.getElementById("btn_tunoff").style.display='inline';
    document.getElementById("btn_tunon").style.display='none';
}

function TurnOF() {
    document.getElementById("image1").src= 'images/turn_off.png';
    document.getElementById("btn_tunon").style.display='inline';
    document.getElementById("btn_tunoff").style.display='none';
}