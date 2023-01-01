var input = document.querySelector("#input-text");
var outinput = document.querySelector("#output-saida");

function criptografar() {
  var texto = input.value;

  var resultadoCriptografia = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output-saida").innerHTML =
    '<textera readonly id="input-text">' +
    resultadoCriptografia +
    "</textera>" +
    '<button class="button-copiar" id="copiar" onclick="copiar()"><P>Copiar<p/></button>';
}

function descriptografar() {
  var texto = input.value;

  var resultadoDescriptografia = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output-saida").innerHTML =
    '<textera readonly id="input-text">' +
    resultadoDescriptografia +
    "</textera>" +
    '<button class="button-copiar" id="copiar" onclick="copiar()"><p>Copiar</p></button>';
}

function copiar() {
  var texto = document.getElementById("input-text");

  texto.select();
  document.execCommand("copy");
  alert("Seu texto foi copiado");
}
