// const parImpar = (option, num) =>{

//     console.log(typeof num);
//     const numConvert = +num
//     console.log('num convertido', typeof numConvert, numConvert);

//     if(option !=='par' && option!=="impar" || isNaN(numConvert)){
//         return 'escolha par ou impar e informe 1 numero'
//     }

//     console.log('lógica do par ou impar');
// }

// console.log(parImpar(process.argv[2], process.argv[3]))

const parOuImpar = (input, num) =>{

    function getRndInteger(min, max) {	
    return Math.floor(Math.random() * (max - min + 1)) + min
} 

const resultPc = getRndInteger(0, 6)
let escolhaPC

if (input === 'impar' && num > 0){
    escolhaPC = "par"
} else if (input === 'par' && num > 0){
    escolhaPC = "impar"
} else {
    console.log('Digite par ou impar')
    return
}

console.log(typeof num) 

if((((num + resultPc) % 2 === 0) && input === 'par') || (((num + resultPc) % 2 !== 0) && input === 'impar')){
    console.log(`Você escolheu ${input} e o computador escolheu ${escolhaPC}. O resultado foi ${num + resultPc}. Você Ganhou!`)
} else if ((((num + resultPc) % 2 === 0) && input === 'impar') || (((num + resultPc) % 2 !== 0) && input === 'par')){
    console.log(`Você escolheu ${input} e o computador escoleu ${escolhaPC}. O resultado foi ${num + resultPc}. Você perdeu!`)
} else {
    console.log(`Erro!`)
}
}

parOuImpar(process.argv[2], Number(process.argv[3]))