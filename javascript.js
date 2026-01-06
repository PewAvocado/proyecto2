const contenedor = document.querySelector("#contenedor");
const btnDimension = document.querySelector("#dimension");


function obtenerColorAleatorio() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    
    return `rgb(${r}, ${g}, ${b})`;
}

function crearCuadricula(tamano) {
  
    contenedor.innerHTML = "";

    contenedor.style.gridTemplateColumns = `repeat(${tamano}, 1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${tamano}, 1fr)`;

    for (let i = 0; i < tamano * tamano; i++) {
        const cuadro = document.createElement('div');
        cuadro.classList.add('cuadrito');
        
        cuadro.addEventListener('mouseenter', () => {
            cuadro.style.backgroundColor = obtenerColorAleatorio();
        },{once : true});

        contenedor.appendChild(cuadro);
    }
}

btnDimension.addEventListener("click", () => {
    let entrada = prompt("¿Cuántos cuadros por lado quieres? (Máximo 50)", "16");
    let numero = parseInt(entrada);

    if (numero >= 1 && numero <= 50) {
        crearCuadricula(numero);
    } else {
        alert("Por favor ingresa un número válido entre 1 y 50.");
    }
});

crearCuadricula(16);