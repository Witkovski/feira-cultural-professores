const { Schema, model } = require('mongoose')

const teacherSchema = new Schema({
    rm: Number,
    nome: String,
    area: String,
    disciplinas: Array,
    email: String,
    aceitaOrientar: { type: Boolean, default: false },
    aceitaAvaliar: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = model('professores', teacherSchema)