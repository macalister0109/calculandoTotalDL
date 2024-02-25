precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function adicionarElemento(){
    cantidad = document.querySelector('.cantidad');
    valorCantidad = Number(cantidad.innerHTML);
    valorCantidad=valorCantidad+1;
    cantidad.innerHTML = valorCantidad;
}

function restarElemento(){
    cantidad = document.querySelector('.cantidad');
    valorCantidad = Number(cantidad.innerHTML);
    if(valorCantidad == 0){
        return;
    }
    valorCantidad--;
    cantidad.innerHTML = valorCantidad;
}

function calcularPrecio(){
    cantidad = document.querySelector('.cantidad');
    valorCantidad = Number(cantidad.innerHTML);
    precioFinal = precio * valorCantidad;
    valorTotal = document.querySelector('.valor-total');
    valorTotal.innerHTML = precioFinal;
    
}

const botonAdd = document.getElementById('add');
const botonRest = document.getElementById('rem');
botonAdd.addEventListener('click', calcularPrecio);
botonRest.addEventListener('click', calcularPrecio);


