var cont = window.document.getElementById('contador')
var res = 0

function aumentar() { // Para somar valores
    var passos = window.document.getElementById('txtpassos').value
    passos = Number(passos)
    if (document.getElementById('txtpassos').value.length == 0) { 
        passos == 0 ? res += 1 : res += passos
        cont.innerHTML = res 
        // Caso o usuário não escolha nenhum valor no input

    } else if (document.getElementById('txtpassos').value <1) {
        window.alert('Valores menores ou iguais a "0" são inválidos')
        // Caso o usuário escolha valores menores que 1

    } else {
        passos == 0 ? res += 1 : res += passos
        cont.innerHTML = res
        // Caso o usuário escolha valores maiores que 1
    }
}

function diminuir() {
    var passos = window.document.getElementById('txtpassos').value
    passos = Number(passos)
    if (document.getElementById('txtpassos').value.length == 0) {
        passos == 0 ? res -= 1 : res -= passos
        cont.innerHTML = res
        // Caso o usuário não escolha um valor no input
        
    } else if (document.getElementById('txtpassos').value <1) {
        window.alert('Valores menores ou iguais a "0" são inválidos')
        // Caso o usuário escolha valores menores que 1

    } else {
        passos == 0 ? res -= 1 : res -= passos
        cont.innerHTML = res
        // Caso o usuário escolha valores maiores que 1
    }
}
   
function resetar() {
    res = 0
    cont.innerHTML = res
    // Botão de resetar -> Volta para 0
}