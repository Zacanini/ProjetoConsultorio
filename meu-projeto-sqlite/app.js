const fastify = require('fastify')({ logger: true });
const db = require('./database/db'); // Importando o banco de dados

// Rota para adicionar um novo paciente
fastify.post('/pacientes', async (request, reply) => {
    const { nome, idade, diagnostico, rua, bairro, cidade, numero_da_casa, email, telefone } = request.body;
    const query = `INSERT INTO paciente (nome, idade, diagnostico, rua, bairro, cidade, numero_da_casa, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
        db.run(query, [nome, idade, diagnostico, rua, bairro, cidade, numero_da_casa, email, telefone], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.code(201).send({ id: this.lastID });
                resolve();
            }
        });
    });
});

// Rota para listar todos os pacientes
fastify.get('/pacientes', async (request, reply) => {
    const query = `SELECT * FROM paciente`;

    return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send(rows);
                resolve();
            }
        });
    });
});

// Rota para buscar um paciente específico pelo ID
fastify.get('/pacientes/:id', async (request, reply) => {
    const query = `SELECT * FROM paciente WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.get(query, [request.params.id], (err, row) => {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else if (!row) {
                reply.code(404).send({ error: "Paciente não encontrado" });
            } else {
                reply.send(row);
            }
            resolve();
        });
    });
});

// Rota para atualizar os dados de um paciente
fastify.put('/pacientes/:id', async (request, reply) => {
    const { nome, idade, diagnostico, rua, bairro, cidade, numero_da_casa, email, telefone } = request.body;
    const query = `UPDATE paciente SET nome = ?, idade = ?, diagnostico = ?, rua = ?, bairro = ?, cidade = ?, numero_da_casa = ?, email = ?, telefone = ? WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.run(query, [nome, idade, diagnostico, rua, bairro, cidade, numero_da_casa, email, telefone, request.params.id], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send({ updatedID: request.params.id });
            }
            resolve();
        });
    });
});

// Rota para deletar um paciente
fastify.delete('/pacientes/:id', async (request, reply) => {
    const query = `DELETE FROM paciente WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.run(query, [request.params.id], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send({ deletedID: request.params.id });
            }
            resolve();
        });
    });
});

// Rota para adicionar um novo tratamento
fastify.post('/tratamentos', async (request, reply) => {
    const { paciente_id, segunda, terca, quarta, quinta, sexta, sabado, domingo } = request.body;
    const query = `INSERT INTO tratamento (paciente_id, segunda, terca, quarta, quinta, sexta, sabado, domingo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
        db.run(query, [paciente_id, segunda, terca, quarta, quinta, sexta, sabado, domingo], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.code(201).send({ id: this.lastID });
                resolve();
            }
        });
    });
});

// Rota para listar todos os tratamentos
fastify.get('/tratamentos', async (request, reply) => {
    const query = `SELECT * FROM tratamento`;

    return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send(rows);
                resolve();
            }
        });
    });
});

// Rota para buscar um tratamento específico pelo ID
fastify.get('/tratamentos/:id', async (request, reply) => {
    const query = `SELECT * FROM tratamento WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.get(query, [request.params.id], (err, row) => {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else if (!row) {
                reply.code(404).send({ error: "Tratamento não encontrado" });
            } else {
                reply.send(row);
            }
            resolve();
        });
    });
});

// Rota para atualizar os dados de um tratamento
fastify.put('/tratamentos/:id', async (request, reply) => {
    const { paciente_id, segunda, terca, quarta, quinta, sexta, sabado, domingo } = request.body;
    const query = `UPDATE tratamento SET paciente_id = ?, segunda = ?, terca = ?, quarta = ?, quinta = ?, sexta = ?, sabado = ?, domingo = ? WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.run(query, [paciente_id, segunda, terca, quarta, quinta, sexta, sabado, domingo, request.params.id], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send({ updatedID: request.params.id });
            }
            resolve();
        });
    });
});

// Rota para deletar um tratamento
fastify.delete('/tratamentos/:id', async (request, reply) => {
    const query = `DELETE FROM tratamento WHERE id = ?`;

    return new Promise((resolve, reject) => {
        db.run(query, [request.params.id], function (err) {
            if (err) {
                reply.code(500).send({ error: err.message });
                reject(err);
            } else {
                reply.send({ deletedID: request.params.id });
            }
            resolve();
        });
    });
});

// Iniciar o servidor na porta 3001
const start = async () => {
    try {
        await fastify.listen({ port: 3001 });
        fastify.log.info(`Servidor rodando na porta 3001`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
