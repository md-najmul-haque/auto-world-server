import express from 'express'
import cors from 'cors'

const app = express()


//middleware 
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({
        status: success,
        message: 'Auto World server is running'
    })
})

export default app