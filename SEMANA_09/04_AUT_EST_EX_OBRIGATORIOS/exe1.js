function calcular(){
    opcao = document.getElementById("opcao").value
    valor = document.getElementById("valor").value
    taxa = document.getElementById("taxa").value
    tempo = document.getElementById("tempo").value
    res = document.getElementById("res")

    if(opcao == "valor_futuro"){
        valor_futuro = valor*((1+(taxa/100))**tempo)
        //console.log(valor_futuro)
        res.innerHTML = `O valor futuro considerando um valor presente de ${valor}, uma taxa de ${taxa}% e um tempo de ${tempo} mes/meses, será de ${valor_futuro} reais.`

    } else {
        valor_presente = (valor/((1+(taxa/100))**tempo))
        //console.log(valor_presente)
        res.innerHTML = `O valor presente considerando um valor futuro de ${valor}, uma taxa de ${taxa} e um tempo de ${tempo} mes/meses, será de ${valor_presente} reais.`
    }
}