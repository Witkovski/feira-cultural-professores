const { TeachersRepository } = require('./teachersRepository')
const { TeachersRepositoryInMemory } = require('./teachersRepositoryInMemory')

function repositoryFactory () {
    const driver = process.env.DATABASE_DRIVER
    return driver === 'inMemory'
        ? new TeachersRepositoryInMemory()
        : new TeachersRepository()
}

module.exports = { repositoryFactory }