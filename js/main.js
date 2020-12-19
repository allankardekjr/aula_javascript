

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//console.log(document.getElementById("agradecimento"))
}


function redirecionar(){
    //window.open("https://www.google.com.br/"); 
    window.location.href = "https://www.google.com.br/";
}   

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

// alert("Obrigado por clicar");
/*
function soma (n1, n2) {
    return n1 + n2;
}

function validaIdade(idade){
    var validar
    if (idade >= 18){
         validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade?");
console.log(validaIdade(idade));

//alert (soma(5, 10);
/*
var d = new Date();
alert(d.getDay());

/*
var count;
for(count= 0; count <= 5; count++){
    alert(count);
};
/*
/*
var count = 0;
while(count <= 5 ){
    console.log(count);
    alert(count);
    count ++
}
/*
/*
var idade = prompt ("Qual sua idade? ")
if (idade >= 18) {
    alert("Maior de idade");
} else{
    alert("Menor de idade")
}
*/
/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "Uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/
//var lista = ["pera", "maça", "laranja"]
//lista.push("uva");
//console.log(lista[0]);
//console.log(lista.join(" | "));

/*var nome = "Alan Kardek";
var n1 = 3;
var n2 = 4;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos" )
alert(n1 * n2);
console.log(nome);
//console.log(idade);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/