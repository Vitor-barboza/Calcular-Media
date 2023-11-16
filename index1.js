let nota1 = parseInt(prompt("Digite a primeira nota:"));
console.log(nota1);

let nota2 = parseInt(prompt("Digite a segunda nota:"));
console.log(nota2);

let nota3 = parseInt(prompt("Digite a terceira nota:"));
console.log(nota3);

let nota4 = parseInt(prompt("Digite a quarta nota:"));
console.log(nota4);

let media = (nota1 +nota2 + nota3 + nota4)/4;

if (media >=6) {
    alert("Aprovado!!!");
    
} else {
    alert("Reprovado!!!");
}