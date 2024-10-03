document.getElementById("searchButton").addEventListener("click", function() {
    const searchTable = document.getElementById("searchTable").value;
    const searchDate = document.getElementById("searchDate").value;

    if (searchTable.trim() === "" || searchDate.trim() === "") {
        alert("Por favor, insira o nome da prova e a data.");
        return;
    }

    const tableKey = `${searchTable}-${searchDate}`;
    const tableData = localStorage.getItem(tableKey); // Ou fetch de um backend

    if (tableData) {
        document.getElementById("result").innerHTML = `
            <h3>Tabela Encontrada: ${searchTable} - ${searchDate}</h3>
            ${tableData}
        `;
    } else {
        document.getElementById("result").innerHTML = "Tabela não encontrada.";
    }
});
