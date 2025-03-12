function contar() {
    let numero = 0;
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");
    let divNumeros = document.getElementById("divNumeros")// recebe o elemento do div numeros do frontex
    divNumeros.innerHTML = ""; 
    for(let i = numero; i <= txtNumeroFinal.value; i++) { //i=i+1
        divNumeros.innerHTML += i + "<br />";// o += vai fazer  com que a variavel receba ela mesma + o valor desejado 
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event){
        if (event.keyCode == 13) {
        contar();
        } else {
        if  (
            isNaN(event.key)&& 
            event.keyCode != 8 &&// tecla backspace
            event.keyCode != 46 && // sgnfc que a tecla delete é clicada
            event.keyCode != 37 &&// seta para esquerda
            event.keyCode != 38 &&// seta para cima
            event.keyCode != 39 &&// seta para baixo
            event.keyCode != 40 &&// seta para direita
            event.keyCode != 35 &&// tecla end
            event.keyCode != 36 // tecla home

        ){ //cod 8 é quando a tecla backspace (apagar á esquerda) é teclada
        console.log("Não é numérico");
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica, por favor tecle uma tecla numérica e tente novamente.";//essa linha vai informar a div numeros que não é possivel digitar algo não numérico. 
        }
    }
});

document.getElementById("txtNumeroFinal").addEventListener('input', function(event){
    if(this.value.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999){
            this.value = 999;
            alert("O numero maximo permitido é 999!");
        } else{
        this.value = this.value.substring(0,3);
        }
    }
});