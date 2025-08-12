const { startConnection, closeConnection } = require('../infra/database/mongodb')
const TeacherModel = require('../infra/models/teachers')

class TeachersRepository {
    async create (data) {
        await startConnection()
        await TeacherModel.create(data)
        await closeConnection()
    }
    async findAll () {
        await startConnection()
        const teachers = await TeacherModel.find()
        await closeConnection()
        console.log('findAll::teachers:', teachers)
        return teachers
    }
    async findByRm (rm) {
        await startConnection()
        const teacher = await TeacherModel.findOne({ rm })
        await closeConnection()
        console.log('findByRm::teacher:', teacher)
        return teacher
    }
    async findByArea (area) {
        await startConnection()
        const teachers = await TeacherModel.find({ area })
        await closeConnection()
        console.log('findByArea::teacher:', teachers)
        return teachers
    }
}

module.exports = { TeachersRepository }