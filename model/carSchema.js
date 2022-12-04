import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    carName: {
        type: String,
        require: [true, "Please provide name for the car"],
    },
    mileage: {
        type: String,
        require: [true, "Please provide mileage for the car"],
    },
    location: {
        type: String,
        require: [true, "Please provide location"],
    },
    engine: {
        type: String,
        require: [true, "Please provide engine for the car"],
    },
    transmission: {
        type: String,
        require: [true, "Please provide transmission for the car"],
    },
    price: {
        type: String,
        require: [true, "Please provide price for the car"],
    }
})

const Car = mongoose.model('Car', carSchema)

export default Car