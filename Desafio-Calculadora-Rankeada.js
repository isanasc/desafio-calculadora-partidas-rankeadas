// Desafio Partidas Rankeadas

function partidasJogadas(vitorias , derrotas){
    return totalPartidas = vitorias + derrotas
}

let totalDePartidasJogadas = 150 + 45

console.log("O total de partidas jogadas é " + totalDePartidasJogadas)

let saldoDeVitorias = (150 - 45)
let nivelDeHeroi

if (saldoDeVitorias < 10){
    nivelDeHeroi = " está no nível de FERRO"
}
else if(saldoDeVitorias > 10 && saldoDeVitorias <=20 ){
    nivelDeHeroi = " está no nível de BRONZE"
}
else if(saldoDeVitorias > 20 && saldoDeVitorias <=50 ){
    nivelDeHeroi = " está no nível de PRATA"
}
else if(saldoDeVitorias > 50 && saldoDeVitorias <=80 ){
    nivelDeHeroi = " está no nível de OURO"
}
else if(saldoDeVitorias > 80 && saldoDeVitorias <= 90 ){
    nivelDeHeroi = " está no nível de DIAMANTE"
}
else if(saldoDeVitorias > 90 && saldoDeVitorias <= 100){
    nivelDeHeroi = " está no nível de LENDÁRIO"
}
else if(saldoDeVitorias >= 101 ){
    nivelDeHeroi = " está no nível de IMORTAL"
}

console.log("O herói tem um saldo de " + saldoDeVitorias + nivelDeHeroi)