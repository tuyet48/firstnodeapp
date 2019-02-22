const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {   
    res.status(200).json({
        message: 'Handling GET requests to /items'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /items'
    });
});

router.get('/:itemId', (req, res, next) => {
    const id = req.params.itemId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discoverd the special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passes an ID'
        });
    }
})

router.patch('/:itemId', (req, res, next) =>{
    res.status(200).json({
        message: 'Updated item!'
    });
})

router.delete('/:itemId', (req, res, next) =>{
    res.status(200).json({
        message: 'Deleted item!'
    });
})

module.exports = router;


