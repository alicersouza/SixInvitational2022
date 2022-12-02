function enviarMensagem() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;
  var receberNovidades = document.getElementById("novidadeSim").checked;
  if (nome == "") {
    alert("Nome é óbrigatório");
  }

  if (email == "") {
    alert("Email é óbrigatório");
  }

  if (telefone == "") {
    alert("Telefone é óbrigatório");
  }

  if (mensagem == "") {
    alert("Mensagem é óbrigatória");
  }

  if (nome != "" && email != "" && telefone != "" && mensagem != "") {
    alert("Olá " + nome + " sua mensagem foi recebida com sucesso.");
  }
}
