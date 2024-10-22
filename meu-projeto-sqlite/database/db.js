const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Definir o caminho do arquivo do banco de dados
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

// Função para criar as tabelas
const createTables = () => {
    db.serialize(() => {
        // Criar tabela paciente
        db.run(`
            CREATE TABLE IF NOT EXISTS paciente (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                idade INTEGER NOT NULL,
                diagnostico TEXT,
                rua TEXT,
                bairro TEXT,
                cidade TEXT,
                numero_da_casa TEXT,
                email TEXT,
                telefone TEXT
            )
        `);

        // Criar tabela tratamento
        db.run(`
            CREATE TABLE IF NOT EXISTS tratamento (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                paciente_id INTEGER,
                segunda TEXT,
                terca TEXT,
                quarta TEXT,
                quinta TEXT,
                sexta TEXT,
                sabado TEXT,
                domingo TEXT,
                FOREIGN KEY(paciente_id) REFERENCES paciente(id)
            )
        `);
    });
};

// Chamar a função para criar as tabelas
createTables();

// Exportar o banco de dados para ser usado em outros arquivos
module.exports = db;
