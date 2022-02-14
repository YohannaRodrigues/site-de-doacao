var enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function (event) {
  event.preventDefault();
  var nomePes = document.querySelector("#nome").value;

  var data = document.querySelector("#nascimento").value;

  var cpf = document.querySelector("#cpf").value;

  var email = document.querySelector("#email").value;

  var tel = document.querySelector("#tel").value;

  var nomeA = document.querySelector("#nomeA").value;

  var nascA = document.querySelector("#nascimentoA").value;

  var tipo = document.querySelector("#tipo").value;

  var sex = document.querySelector("#sexo").value;

  var cast = document.querySelector("#cast").value;

  if ((nomePes, data, cpf, email, tel, nomeA, nascA == 0)) {
    window.alert(
      "Seu cadastro não pode ser concluido. Verifique suas informações e tente novamente!"
    );
  } else {
    window.alert("Seu cadastro foi realizado com sucesso!");
  }
});
