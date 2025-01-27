 function calcularSuma( ){
    var num1 = parseFloat(document.getElementById(Primer-numero).value );
    var num2 = parseFloat(document.getElementById(Segundo-numero).value);
 }

 if(isNaN(num1)|| isNaN(num2)){
    alert("hey eso no se puede sumar");
    return;}

  var suma= num1 + num2 ;


  document.getElementById("resultado").textContent= suma;