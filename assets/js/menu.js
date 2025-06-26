

/*Carga el menu generado en html esto es para no estar creando los menus en cada pagina*/
fetch("menu.html").then(res => res.text()).then(data => {
    document.getElementById("menu").innerHTML = data;
});