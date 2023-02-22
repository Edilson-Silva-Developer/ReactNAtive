
document.write("</br><b>Escolha seu pedido: </br>");
document.write("</br><b> 0 - Sorvete </br>");
document.write("</br><b> 1 - agua mineral </br>");
document.write("</br><b> 2 - Salgado</br>");
document.write("</br><b> 3- Coca-cola</br>");

function pedido() {

    x = prompt("O que deseja pedir ? ");

    switch (x) {


    case "0":
            alert("Você pediu um sorevete !");
                break;
    case "1":
            alert("Você pediu uma agua mineral !");
                break;
    case "2":
            alert("Você pediu um Salgado !");
                break;
    case "3":
            alert("Você pediu uma Coca-Cola");
                break;
    default:
            alert("ops não temos essa opção, no momento.")
                break;








    }
}