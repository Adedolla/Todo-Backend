const express = require('express')
const { createTask, DeleteTask, GetAllTask, updateTask } = require('../controller/taskController')


const route = express.Router()

route.post('/create', createTask)
route.delete('/delete/:id', DeleteTask )
route.get('/Gettask', GetAllTask)
route.put('/update/:id', updateTask)

module.exports = route