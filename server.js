import app from './app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'

const port = process.env.PORT || 5000

//database connection
mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`Database connection is successful`.green.bold)
})

app.listen(port, () => {
    console.log(`port is listening to the ${port}`.blue.bold)
})