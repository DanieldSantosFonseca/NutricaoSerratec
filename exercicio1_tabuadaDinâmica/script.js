


function calcular() {
    let numero = Number(prompt("Digite o número que deseja multiplicar"));
    let quantidade = parseInt(prompt("Digite até qual número você deseja multiplicar."));

    for(i = 0; i <= quantidade; i++){
        document.write(`${número} x ${i} = ${(número * i).toFixed()}`)
    }
}