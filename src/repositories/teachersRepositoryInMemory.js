const { teachersTable } = require('../infra/models/inMemory')

class TeachersRepositoryInMemory {
    create (data) {
        teachersTable.push(data)
    }
    findAll () {
        return teachersTable
    }
    findByRm (rm) {
        const teacherFound = teachersTable.find(
            teacher => teacher.rm === rm
        )
        return teacherFound
    }
    findByArea (area) {
        const teachersFound = teachersTable.filter(
            teacher => teacher.area === area
        )
        return teachersFound
    }
}

module.exports = { TeachersRepositoryInMemory }