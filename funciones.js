 function calcularSuma( ){
    console.log("function lladada")
    let num1 = parseFloat(document.getElementById("primer-numero").value);
    let num2 = parseFloat(document.getElementById("segundo-numero").value);
 

 if(isNaN(num1)|| isNaN(num2)){
    alert("hey eso no se puede sumar");
    return;
    }

  let suma= num1 + num2 ;


  document.getElementById("resultado").textContent= "el resultado es"+ suma;
    console.log(suma);

}