let {carrosAlfabeticOrdem} = require("./exercicio1.js");

function carrosRodizio(diaSemana) {
    const rodizio = {
        1: [1, 2], // Segunda-feira
        2: [3, 4], // Terça-feira
        3: [5, 6], // Quarta-feira
        4: [7, 8], // Quinta-feira
        5: [9, 0], // Sexta-feira
        6: [],     // Sábado
        0: []      // Domingo
    };
    
    return rodizio[diaSemana] || [];
}

let contador = 0;

while (contador < 7) {
    let rodizio = carrosRodizio(contador);
    let diaSemana;

    switch (contador) {
        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda-feira';
            break;
        case 2:
            diaSemana = 'Terça-feira';
            break;
        case 3:
            diaSemana = 'Quarta-feira';
            break;
        case 4:
            diaSemana = 'Quinta-feira';
            break;
        case 5:
            diaSemana = 'Sexta-feira';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
    }

    // verifica se a lista rodizio está vazia 
    if (rodizio.length > 0) {
        // metodo filter do array carros, cria um novo array que passam no teste aplicado na funcao
        let carrosFiltrados = carrosAlfabeticOrdem.filter(carro => {
            // retorna o ultimo caractere da string e converte para inteiro
            let finalPlaca = parseInt(carro.placa.slice(-1));
            // metodo includes verifica se esta presente na lista rodizio, retorna true ou false
            return rodizio.includes(finalPlaca);
        });
        
        // verifica se existe algum carro na lista de carros filtrados
        if (carrosFiltrados.length > 0) {
            // se existir carro na lista irá imprimir:
            console.log(`No dia ${diaSemana}, os veículos de rodízio são:`);
            // forEach para interação de carro na lista
            carrosFiltrados.forEach(carro => {
                console.log(`Modelo: ${carro.modelo}, Ano: ${carro.ano}, Placa: ${carro.placa}`);
            });
        // caso não tenha carro na lista de carrosFiltrados ira imprimir:
        } else {
            console.log(`No dia ${diaSemana}, não há veículos no rodízio.`);
        }
    // caso não tenha rodizio de carros, como nos fim de semana    
    } else {
        console.log(`No dia ${diaSemana}, não há rodízio de veículos.`);
    }

    console.log(''); // add uma linha de espacamento em cada interacao no terminal

    contador++;
    }