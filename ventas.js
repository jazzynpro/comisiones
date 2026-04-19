const VENTAS_BASE = 5;
//funcion para calcular comision
function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;
    
    if (numeroVentas > VENTAS_BASE){
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (PrecioProducto * 0.1);
        
    }
        return comision;
}

function calcular(){
    //recuperamos propiedades de la caja de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");
    //recuperamos el valor de las cajas de texto
    let sueldoBaseStr= componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let PrecioProductoStr = componentePrecio.value;
    //convertimos el texto a Numero
    let sueldoBase=parseFloat(sueldoBaseStr);
    let numeroVentas=parseFloat(numeroVentasStr);
    let PrecioProducto=parseFloat(PrecioProductoStr);

    let comision = calcularComision(numeroVentas,PrecioProducto);
    let total = sueldoBase + comision;

    //recuperamos el span
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}

