let boton =document.getElementById("boton");
let foto1 =document.getElementById("foto1");
let titulo1 =document.getElementById("titulo1");
let audio1=document.getElementById("audio1");

boton.addEventListener("click",perroGuardian);

function perroGuardian(){
   titulo1.textContent="the scienttist";
   foto1.src="img/imagen1.png"
   audio1.src="audio/audio1.mp3"
}