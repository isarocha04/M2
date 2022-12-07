function converter() {
    valor = document.getElementById("num").value
    resposta = document.getElementById("res")
    res = []
    numero = valor
    
    if(valor>=128){
        res.push(1)
        valor -= 128
    }else{
        res.push(0)
    }

    if(valor>=64){
        res.push(1)
        valor -= 64
    }else{
        res.push(0)
    }

    if(valor>=32){
        res.push(1)
        valor -= 32
    }else{
        res.push(0)
    }

    if(valor>=16){
        res.push(1)
        valor -= 16
    }else{
        res.push(0)
    }

    if(valor>=8){
        res.push(1)
        valor -= 8
    }else{
        res.push(0)
    }

    if(valor>=4){
        res.push(1)
        valor -= 4
    }else{
        res.push(0)
    }

    if(valor>=2){
        res.push(1)
        valor -= 2
    }else{
        res.push(0)
    }

    if(valor>=1){
        res.push(1)
        valor -= 1
    }else{
        res.push(0)
    }
    
    resposta.innerHTML = `O número ${numero} convertido para binário será igual a `
    for(i=0;i<res.length;i++){
        resposta.innerHTML+= res[i]
    }
}