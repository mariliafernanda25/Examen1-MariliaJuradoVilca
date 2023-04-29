

function calcular(){
    const radios = document.getElementsByName("rdnTemp");
    const selected = Array.from(radios).find(radio => radio.checked).value; 

    var valor = document.getElementById("valor").value;
    var convertir = parseFloat(valor);
    if (selected==="celsius"){
        var respuesta = (convertir*5)/9 + 32;
        alert("La temperatura calculada es "+respuesta+"°C");
    }
    else if(selected==="farenheit"){
        var respuesta = (convertir - 32)*5/9;
        alert("La temperatura calculada es "+toString(respuesta)+"°F");
    }
    else{
        alert("Imposible determinar")
    }
}