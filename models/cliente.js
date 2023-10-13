const mongoose = require('mongoose')

const Cliente = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    dtNascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    CNH: {
        type: Number,
        required: true
    },
    vencCNH: {
        type: Date,
        required: true
    }

}, {versionKey:false});

module.exports = mongoose.model('Cliente', Cliente);
