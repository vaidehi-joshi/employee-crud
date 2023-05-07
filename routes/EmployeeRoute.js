import express from 'express'
import { updateEmployee, createEmployee, getEmployeeById, getEmployees, deleteEmployee } from '../controller/EmployeeController.js'

const router = express.Router()

router.get('/employee', getEmployees)
router.get('/employee/:id', getEmployeeById)
router.post('/employee', createEmployee)
router.patch('/employee/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee)

export default router
