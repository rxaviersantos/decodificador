let input = document.querySelector("#input-text");
let outinput = document.querySelector("#output-saida");

function criptografar() {
  let texto = input.value;

  let resultadoCriptografia = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output-saida").innerHTML =
    '<textera readonly id="input-text">' +
    resultadoCriptografia +
    "</textera>" +
    '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  let texto = input.value;

  let resultadoDescriptografia = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output-saida").innerHTML =
    '<textera readonly id="input-text">' +
    resultadoDescriptografia +
    "</textera>" +
    '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  let texto = document.getElementById("input-text");

  texto.select();
  document.execCommand("copy");
  alert("Seu texto foi copiado");
}
