/* calculadora com as 4 operações básicas*/

function calculadora(){
    //pegar o elemento pela ID, e ira digitar o nome do elemento e o valor que ele está 
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;

    //está pegando o elemento do radiobox usando esse parâmetro input [name=opt]: checked
    op= document.querySelector("input[name=opt]:checked").value;
    rstd= eval(parseInt(num1) + op + parseInt(num2));
    document.getElementById("mostrar-resultado").innerHTML= rstd;
}