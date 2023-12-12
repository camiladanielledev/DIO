
let jogador = ("John")

let saldoRankeadas = saldo (50,10)
function saldo(vitorias,derrotas){
    let saldoVD = vitorias-derrotas
    return saldoVD

}

let xp = saldoRankeadas;
let nivel

if (xp<=10) {nível = ("Ferro")}
else if (xp >=11 && xp <=20 ) {nivel = ("Bronze")}
else if (xp >=21 && xp <=50 ) {nivel = ("Prata")}
else if (xp >=51 && xp <=80 ) {nivel = ("Ouro")}
else if (xp >=81 && xp <=90 ) {nivel = ("Diamante")}
else if (xp >=91 && xp <=100 ) {nivel = ("Lendário")}
else if (xp >=101) {nivel = ("Imortal")}


console.log("O Herói tem de saldo de",saldoRankeadas,"está no nível de",nivel )
