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

function validarCampo(idInput, idError){
    let valor = document.getElementById(idInput).value.trim();
    let error = document.getElementById(idError);

    error.textContent = "";

    // Vacío
    if(valor === ""){
        error.textContent = "Este campo es obligatorio";
        return false;
    }

    // Solo números
    if(!/^\d+$/.test(valor)){
        error.textContent = "Solo se permiten números";
        return false;
    }

    // Máximo 5 dígitos
    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    return true;
}

function calcular(){

    let v1 = validarCampo("txtSueldoBase","errorSueldo");
    let v2 = validarCampo("txtVentas","errorVentas");
    let v3 = validarCampo("txtPrecio","errorPrecio");

if (!v1 || !v2 || !v3){
    return;
}

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let PrecioProducto=recuperarFloat("txtPrecio");

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

