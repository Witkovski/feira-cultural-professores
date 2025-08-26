const { repositoryFactory } = require('../repositories/factory')

async function findBySubject (req, res) {
    const { disciplina } = req.params
    const repository = repositoryFactory()
    const teachers = await repository.findBySubject(disciplina)
    return res.json(teachers)
}

module.exports = { findBySubject }
