var input = document.querySelector("#input-texto");
var outinput = document.querySelector("#output");

function criptografar() {
  var texto = input.value;

  var resultado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output").innerHTML =
    '<textera readonly id="input-texto">' +
    resultado +
    "<textera>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}
