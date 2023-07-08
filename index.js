// ...................................................................................................................
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const connectDb = require('./db.js')
const usersRoutes = require('./controllers/users.controller.js')
const { errorHandler } = require('./middlewares')

const app = express()

  app.use(cors());


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your desired origin or list of allowed origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); // Add the allowed HTTP methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  

app.use(bodyParser.json())
app.use('/api/users', usersRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('Database Connection Succeeded.')
        app.listen(personal-api-black.vercel.app,
            () => console.log('API Started at => http://localhost:8080/api/users'))
    })
    .catch(err => console.log(err))

    module.exports = app;

// ...................................................................................................................





