var input = document.querySelector("#input-texto");
var outinput = document.querySelector("#output");

function criptografar() {
  var texto = input.value;

  var resultadoCriptografia = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output").innerHTML =
    '<textera readonly id="input-texto">' +
    resultadoCriptografia +
    "<textera>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  var texto = input.value;

  var resultadoDescriptografia = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output").innerHTML =
    '<textera readonly id="input-texto">' +
    resultadoDescriptografia +
    "<textera>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var texto = document.getElementById("#input-texto");

  texto.select();
  document.execCommand("copy");
  alert("Copiado");
}
