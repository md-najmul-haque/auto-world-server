import app from './app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'

const port = process.env.PORT || 5001

//database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.48boimr.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connection is successful`.green.bold)
})

app.listen(port, () => {
    console.log(`port is listening to the ${port}`.blue.bold)
})