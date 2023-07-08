const mongoose = require('mongoose')

const dbUri = "mongodb+srv://dineshkumarfullstack:EHb9E8ItOTFOPOIh@cluster0.pxvuzum.mongodb.net/?retryWrites=true&w=majority";


mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}