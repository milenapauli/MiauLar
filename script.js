const formulario = document.getElementById("formAdocao");
const conteudoFormulario = document.getElementById("conteudoFormulario");
const mensagemSucesso = document.getElementById("mensagemSucesso");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        conteudoFormulario.style.display = "none";
        mensagemSucesso.style.display = "block";
    });
}
