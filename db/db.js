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
    nome TEXT,
    data TEXT,
    gabarito TEXT
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

// Fechando o banco de dados
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Fechando
