const sqlite3 = require('sqlite3').verbose();

// Abrindo o banco de dados
let db = new sqlite3.Database('./db/nota_facil.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados Nota Fácil.');
});

// Criando tabela para provas e gabaritos
db.run(`CREATE TABLE IF NOT EXISTS provas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    data TEXT NOT NULL,
    gabarito TEXT NOT NULL
)`);

// Função para salvar prova e gabarito
function salvarProva(nome, data, gabarito) {
    db.run(`INSERT INTO provas (nome, data, gabarito) VALUES (?, ?, ?)`, [nome, data, gabarito], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Prova salva com ID ${this.lastID}`);
    });
}

// Função para buscar uma prova por nome e data
function buscarProva(nome, data, callback) {
    db.get(`SELECT * FROM provas WHERE nome = ? AND data = ?`, [nome, data], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        callback(row);
    });
}

// Função para atualizar gabarito de uma prova existente
function atualizarGabarito(id, gabarito) {
    db.run(`UPDATE provas SET gabarito = ? WHERE id = ?`, [gabarito, id], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Prova com ID ${id} atualizada.`);
    });
}

// Função para excluir uma prova por ID
function excluirProva(id) {
    db.run(`DELETE FROM provas WHERE id = ?`, id, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Prova com ID ${id} excluída.`);
    });
}

// Fechando o banco de dados (pode ser chamado em algum ponto onde a conexão não é mais necessária)
function fecharDB() {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Fechando a conexão com o banco de dados.');
    });
}

// Exports para usar essas funções em outros arquivos, como na API ou aplicação principal
module.exports = {
    salvarProva,
    buscarProva,
    atualizarGabarito,
    excluirProva,
    fecharDB
};
