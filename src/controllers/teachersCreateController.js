const { repositoryFactory } = require('../repositories/factory')

async function create (req, res) {
    const input = req.body
    const { rm, nome, area, disciplinas } = input
    const repository = repositoryFactory()
    console.log('input: ', input)
    if (!rm || !nome || !area || !disciplinas) {
      return res.status(400).json({
        code: 'TEA-001',
        message: 'Rm, nome, area e disciplinas são obrigatórios, revise e tente novamente'
      })
    }
    const teacherFound = await repository.findByRm(rm)
    if (teacherFound) {
      return res.status(400).json({
        code: 'TEA-002',
        message: 'Já existe um professor com este rm!'
      })
    }
    await repository.create(input)
    return res.status(201).json()
}

module.exports = { create }
