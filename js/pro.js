document.addEventListener("DOMContentLoaded", function() {
    const criarProvaBtn = document.getElementById("criarProva");

    criarProvaBtn.addEventListener("click", criarProva);

    function criarProva() {
        const numQuestoesInput = document.getElementById("numQuestoes");
        const tabelaGabarito = document.getElementById("tabela
