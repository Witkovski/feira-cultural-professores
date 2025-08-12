const { repositoryFactory } = require('../repositories/factory')

async function listAll (req, res) {
    const repository = repositoryFactory()
    const teachers = await repository.findAll()
    return res.json(teachers)
}

module.exports = { listAll }
