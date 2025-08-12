const { repositoryFactory } = require('../repositories/factory')

async function findByArea (req, res) {
    const { area } = req.params
    if (!area) {
      return res.status(400).json({
        code: 'TEA-003',
        message: 'É obrigatório informar a área consultada'
      })
    }
    const repository = repositoryFactory()
    const teachers = await repository.findByArea(area)
    return res.json(teachers)
}

module.exports = { findByArea }
