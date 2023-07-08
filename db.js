const mongoose = require('mongoose')

// const dbUri = "mongodb+srv://fullstackankitkumar:LUkLJaDZbD0meg7T@ankit-assigment.e2qywdw.mongodb.net/ankit-assigment?retryWrites=true&w=majority";
const dbUri = "mongodb+srv://dineshkumarfullstack:EHb9E8ItOTFOPOIh@cluster0.pxvuzum.mongodb.net/?retryWrites=true&w=majority";


mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}