import express from 'express'
import { saveCar } from '../../controllers/carController.js'

const carRoutes = express.Router

carRoutes.route('/car').post(saveCar)

export default carRoutes;