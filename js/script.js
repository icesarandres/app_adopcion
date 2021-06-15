var btndog = document.getElementById("btndog").addEventListener("click", functionDog);
console.log(btndog);
/*document.getElementsByClassName('footer').style.position="fixed";*/
function functionDog() {
    btndog = 1;
   /* console.log(btndog)*/

    if (btndog =1) {
        document.getElementById('contenido1').style.display="";
        document.getElementById('contenido2').style.display="";
        document.getElementById('contenido3').style.display="";
        document.getElementById('contenido4').style.display="";
        document.getElementById('espacio').style.display="none";
    }
}
