const prompt = require ("readline-sync");
const idade = prompt.question("Qual a sua idade ?");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);