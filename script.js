const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  document.querySelector(".card").innerHTML = `
    <div class="success">
      <h1>✨ Agendamento enviado!</h1>

      <p>
        Retornaremos com a confirmação do seu atendimento.
      </p>
    </div>
  `;
});