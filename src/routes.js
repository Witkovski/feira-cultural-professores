const { Router } = require('express')
const teachersListController = require('./controllers/teachersListController')
const teachersListByAreaController = require('./controllers/teachersListByAreaController')
const teachersListBySubjectController = require('./controllers/teachersListBySubjectController')
const subjectsListController = require('./controllers/subjectsListController')
const teachersCreateController = require('./controllers/teachersCreateController')
const router = Router()

router.get('/teachers', teachersListController.listAll)
router.get('/teachers/:area', teachersListByAreaController.findByArea)
router.get('/teachers/:disciplina', teachersListBySubjectController.findBySubject)
router.post('/teachers', teachersCreateController.create)


router.get('/subjects', subjectsListController.listAll)
  


module.exports = { router }