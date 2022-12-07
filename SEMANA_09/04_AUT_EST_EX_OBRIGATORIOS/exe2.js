function calcular(){
    periodo = document.getElementById("periodo").value
    taxa = document.getElementById("taxa").value
    capital = document.getElementById("capital").value
    res = document.getElementById("res")

    juro = capital*(taxa/100)*periodo
    console.log(juro)

    montante = Number(capital) + Number(juro)

    res.innerHTML = `O juro final será de ${juro} e o montante final será de ${montante}`

}