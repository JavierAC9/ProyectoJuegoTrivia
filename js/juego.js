



function respuesta1() {
    /*Define si "resultado" tiene Hijos. Si tiene un Hijo, lo elimina*/
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }    

    /*Verifica que haya un elemento de Radio seleccionado*/
    var selected = document.getElementById("3").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    
    /*Si ningún elemento de Radio está seleccionado*/
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    /*Si el elemento de Radio seleccionado es el correcto*/
    else if (selected) { 
        var text = document.createTextNode("Correcto" );
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
    } 
     /*Si el elemento de Radio seleccionado NO es el correcto*/
    else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("3").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
     /*Se deshabilita cada elemento de Radio. También se deshabilita el Botón*/
    if (contador > 0){
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta2() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("2").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("2").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta3() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("4").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("4").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta4() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("1").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("1").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}



function respuesta5() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("1").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("1").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}


function respuesta6() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("2").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("2").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta7() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("4").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("4").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta8() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("3").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contfinal++;
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("3").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta9() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("2").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("2").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto" );
    }
    
    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
    
}

function respuesta10() {
    var hijos = document.getElementById("resultado").childNodes;
    if (hijos.length > 0){
        document.getElementById("resultado").removeChild(hijos[0]);
    }
    
    var selected = document.getElementById("4").checked;
    var contador = 0;
    var elements = document.getElementsByClassName("radio");
    for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
            contador++;
        }
    }
    if(contador == 0){
         var text = document.createTextNode("Por favor seleccione una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");

    }else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
        contcorrectas++;
        
    } else {
        var text = document.createTextNode("La respuesta correcta es" + " "  + document.getElementById("4").value);
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto" );
    }


    if (contador > 0){
        
        for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
        }   
        document.getElementById("button").disabled = true;  
    }
}



