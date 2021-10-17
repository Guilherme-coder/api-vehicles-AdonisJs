const Car = use('App/Models/Car/Car')

class CarRepository {
    async index() {
        const cars = await Car
                    .query()
                    .select('id',
                            'advertiser',
                            'brand',
                            'model',
                            'description',
                            'year',
                            'price',
                            'engine',
                            'created_at',
                            'picture_one')
                    .orderBy('created_at', 'desc')
                    .fetch()
        return cars
    }

    async store(request, auth) {
        const data = request.all()
        const car = await Car.create({
            advertiser: auth.user.id,
            brand: data.brand,
            model: data.model,
            description: data.description,
            year: data.year,
            price: data.price,
            engine: data.engine,
            picture_one: data.picture_one,
            picture_two: data.picture_two,
            picture_three: data.picture_three,
            picture_four: data.picture_four,
            picture_five: data.picture_five,
            picture_six: data.picture_six
        })
        return car
    }

    async show(params) {
        const car = await Car.findOrFail(params.id)
        return car
    }

    async destroy(params, auth, response) {
        const car = await Car.findOrFail(params.id)
        const userId = auth.user.id
        if(userId === car.advertiser)
            car.delete()
        else
            return response.status(401).json({ error: 'não tens permissão para deletar este registro' })
        }
}

module.exports = new CarRepository