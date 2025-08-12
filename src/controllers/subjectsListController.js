// const { repositoryFactory } = require('../repositories/factory')

async function listAll (req, res) {
    // const repository = repositoryFactory()
    // const teachers = await repository.findAll()
    return res.json([
        { id: 1, nome: 'Matemática' },
        { id: 2, nome: 'Português' },
        { id: 3, nome: 'História' },
        { id: 4, nome: 'Geografia' },
        { id: 5, nome: 'Ciências' }
    ])
}

module.exports = { listAll }
