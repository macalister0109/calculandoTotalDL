precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
function adicionarElemento(){
    cantidad = document.querySelector('.cantidad');
    valorCantidad = Number(cantidad.innerHTML);
    valorCantidad++;
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