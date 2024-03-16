var div = document.getElementById("letreiro");
var texto = "Bem vindos a Lirio Barber Shop";
var delay = 200; // Delay entre cada caractere em milissegundos

function escrever(str, done) {
  var char = str.split("");
  var i = 0;
  var typer = setInterval(function () {
    if (i === char.length) {
      clearInterval(typer);
      return setTimeout(done, 500); // Apenas para esperar um pouco
    }
    div.textContent += char[i++];
  }, delay);
}

function limpar(done) {
  var char = div.textContent;
  var i = char.length;
  var typer = setInterval(function () {
    if (i-- === 0) {
      clearInterval(typer);
      return done();
    }
    div.textContent = char.slice(0, i);
  }, delay);
}

function rodape(str) {
  escrever(str, function () {
    limpar(function () {
      rodape(str); // Inicia novamente o processo após limpar o texto
    });
  });
}

rodape(texto);
