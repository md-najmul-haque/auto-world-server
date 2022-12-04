import express from 'express'
import { getCars, saveCar } from '../../controllers/carController.js'

const carRoutes = express.Router()

carRoutes.route('/car').post(saveCar).get(getCars)

export default carRoutes;