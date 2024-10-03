document.getElementById("salvarTabela").addEventListener("click", function() {
    const tableName = document.getElementById("nomeProva").value;
    const tableDate = document.getElementById("dataProva").value;
    const tableData = document.getElementById("tabelaAlunos").outerHTML;

    if (tableName.trim() === "" || tableDate.trim() === "") {
        alert("Por favor, insira o nome e a data da prova.");
        return;
    }

    // Salvar no localStorage ou enviar para backend
    const tableKey = `${tableName}-${tableDate}`;
    localStorage.setItem(tableKey, tableData);  // LocalStorage para testes
    alert(`Tabela "${tableName}" salva com sucesso!`);

    // Gerar link para compartilhar
    const sharedLink = `${window.location.origin}/busca.html?table=${encodeURIComponent(tableKey)}`;
    document.getElementById("linkCompartilhamento").innerHTML = `
        <p>Link de compartilhamento: <a href="${sharedLink}" target="_blank">${sharedLink}</a></p>
        <p><strong>Insira + notas.</strong></p>
    `;
});
