const Motorcycle = use('App/Models/Motorcycle/Motorcycle')
class MotorcycleRepository {
    async index() {
        const motorcycles = await Motorcycle
                            .query()
                            .select('id',
                                    'advertiser',
                                    'brand',
                                    'model',
                                    'description',
                                    'category',
                                    'year',
                                    'price',
                                    'category',
                                    'created_at',
                                    'picture_one')
                            .orderBy('created_at', 'desc')
                            .fetch()
        return motorcycles
    }

    async store(request, auth) {
        const data = request.all()
        const motorcycle = await Motorcycle.create({
        advertiser: auth.user.id,
        brand: data.brand,
        model: data.model,
        description: data.description,
        category: data.category,
        year: data.year,
        price: data.price,
        capacity: data.capacity,
        picture_one: data.picture_one,
        picture_two: data.picture_two,
        picture_three: data.picture_three,
        picture_four: data.picture_four,
        picture_five: data.picture_five,
        picture_six: data.picture_six
        })
        return motorcycle
    }

    async show(params) {
        const motorcycle = await Motorcycle.findOrFail(params.id)
        return motorcycle
    }

    async destroy(params, auth, response) {
        const motorcycle = await Motorcycle.findOrFail(params.id)
        const userId = auth.user.id
        if(userId === motorcycle.advertiser)
        motorcycle.delete()
        else{
        return response.status(401).json({ error: 'não tens permissão para deletar este registro' })
        }
    }
}

module.exports = new MotorcycleRepository