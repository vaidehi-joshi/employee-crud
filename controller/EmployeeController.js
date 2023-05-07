import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getEmployees = async (req, res) => {
    try {
        const response = await prisma.employee.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const response = await prisma.employee.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createEmployee = async (req, res) => {
    const { name, age, phone_number, experience, department,skills} = req.body;

    try {
        const employee = await prisma.employee.create({
            data: {
                name: name,
                age: age,
                phone_number: phone_number,
                experience: experience,
                department: department,
                skills: skills
            },
        })
        res.status(201).json(employee)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const employee = await prisma.employee.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        })
        res.status(200).json(employee)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const employee = await prisma.employee.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(employee)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
