const carros = [
    {
    modelo: "fusca",
    ano: 1969,
    placa: "QQQ1F23",},
    {
    modelo: "ferrari",
    ano:  1990,
    placa:  "WWW2F25",},
    {
    modelo: "huracan",
    ano:  2023,
    placa:  "ZZZ1F23",},
    {
    modelo: "a3",
    ano:  2024,
    placa:  "CCC1F26",}    
];

let novoCarro = {
    modelo: "t-cross",
    ano: 2022,
    placa: "DFC3R43"
};

// visualiza lista "carros"
//console.log(carros);

// add novo carro
carros.push(novoCarro);

// visualiza lista "carro" add novo carro
//console.log(carros);

// ordena lista de carros pelo modelo em ordem alfabética
// sintaxe: metodo "localeCompare()" string1.localeCompare(string2, [locales, [options]])
let carrosAlfabeticOrdem = carros.sort((a, b) => a.modelo.localeCompare(b.modelo));

//console.log(carrosAlfabeticOrdem);

module.exports = { carrosAlfabeticOrdem };