const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validWater(water) {
    // waterの名前が文字列であればtrue
    const hasName = typeof water.name == 'string';
    // waterの評価が文字列で、かつ中身が空白でなければtrue
    const hasRating = typeof water.rating == 'string' && water.rating.trim() != '';
    
    // ともにtrueならtrueを返す
    return hasName && hasRating;
}

router.get('/', (req, res) => {
    queries.getAll().then(waters => {
        res.json(waters);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id)
        .then(water => {
            if (water) {
                res.json(water);
            } else {
                next();
            }
        });
});

router.post('/', (req, res, next) => {
    if (validWater(req.body)) {
        // insert into db
        queries.create(req.body)
            .then(waters => {
                res.json(waters[0]);
            });
    } else {
        next(new Error('Invalid water'));
    } 
});

router.put('/:id', isValidId, (req, res, next) => {
    if (validWater(req.body)) {
        //update the water
        queries.update(req.params.id, req.body)
            .then(waters => {
                res.json(waters[0]);
            });
    } else {
        next(new Error('Invalid water'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id)
        .then(() => {
            res.json({
                delete: true
            });
        });
});

module.exports = router;