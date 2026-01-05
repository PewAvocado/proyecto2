const contenedor = document.querySelector("#contenedor"); 

for (let i = 0; i < 256; i++) {
    const cuadro = document.createElement('div');
    cuadro.classList.add('cuadro'); 
    contenedor.appendChild(cuadro);
}