var cont = window.document.getElementById('contador')
var res = 0

function ok() {
    var passos = window.document.getElementById('txtpassos').value
    passos = Number(passos)
}

function aumentar() {
    var passos = window.document.getElementById('txtpassos').value
    passos = Number(passos)
    res += passos
    cont.innerHTML = res
}

function diminuir() {
    var passos = window.document.getElementById('txtpassos').value
    passos = Number(passos)
    res -= passos
    cont.innerHTML = res
}
   
function resetar() {
    res = 0
    cont.innerHTML = res
}