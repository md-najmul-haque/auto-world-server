import Car from "../model/carSchema.js"

export const saveCar = async (req, res, next) => {

    try {
        const car = new Car(req.body)
        const result = car.save()
        res.status(200).json({
            status: 'success',
            message: 'Car data saved successfully',
            result

        })


    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Fail to save car data',
            error: error.message,

        })
    }


}