const express = require('express');
const router = express.Router();

const Users = require('../models/users.model');
const { generateCrudMethods } = require('../services');
const usersCrud = generateCrudMethods(Users);
const { validateDbId, raiseRecord404Error } = require('../middlewares');

router.get('/', (req, res, next) => {
  usersCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
});

router.get('/:id', validateDbId, (req, res, next) => {
  usersCrud
    .getById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
});

router.post('/', (req, res, next) => {
  usersCrud
    .create(req.body)
    .then((data) => {
      const { __v, ...responseData } = data._doc;
      res.status(201).json(responseData);
    })
    .catch((err) => next(err));
});

router.put('/:id', validateDbId, (req, res, next) => {
  usersCrud
    .update(req.params.id, req.body)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
});

router.delete('/:id', validateDbId, (req, res, next) => {
  usersCrud
    .delete(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
});

module.exports = router;
