const express = require('express');
const bodyParse = require('body-parser');

var Item = require('../../models/item');
const { model } = require('../../models/item');
const item = require('../../models/item');

const itemsRouter = express.Router();
itemsRouter.use(bodyParse.json());

itemsRouter.route("/")
    .get((req, res, next) => {
        Item.find({})
            .sort({ updatedAt: -1})
            .then((items) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, err => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Item.create(req.body)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            })
    })
    .put((req, res, next) => {
        res.statusCode= 403;
        console.log('PUT operation not supported');
    })
    .delete((req, res, next) => {
        Item.remove()
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp)
            }, (err) => next(err))
            .catch((err) => {res.statusCode = 404; next(err)});
    });
    
itemsRouter.route('/:itemId')
    .get((req, res, next) => {
        Item.findById(req.params.itemId)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        Item.findByIdAndUpdate(req.params.itemId, {$set: req.body}, {new: true})
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            }, err => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Item.findByIdAndRemove(req.params.itemId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = itemsRouter;