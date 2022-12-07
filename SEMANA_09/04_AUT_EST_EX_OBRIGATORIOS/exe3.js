function impressão(){
    res = document.getElementById("res")
    frase = document.getElementById("frase").value

    res.innerHTML = frase[0]+"<br>"

    for(i=1;i<frase.length;i++){
        res.innerHTML += '&nbsp'.repeat(i)+frase[i]+'<br>'
    }
}