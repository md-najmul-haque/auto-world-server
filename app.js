import express from 'express'
import cors from 'cors'
import carRoutes from './routes/v1/carRoute.js'

const app = express()


//middleware 
app.use(cors())
app.use(express.json())

app.use('/api/v1', carRoutes)

app.get('/', (req, res) => {
    res.status(200).json({
        status: success,
        message: 'Auto World server is running'
    })
})

export default app