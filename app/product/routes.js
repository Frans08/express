const router = require('express').Router();
const connection = require('../../config/mysql')
    
router.get('/', (req, res)=>{
connection.connect();
connection.query({
    sql: 'SELECT * FROM pricelist',
}), (error, result) => {
    if(error) {
        res.send({
            staus: 'failed',
            response: 'failed to fetch data'
        });
    }else {
        res.send({
            status: 'success',
            response: result
        });
    }
}
});


router.get('/product/:id', (req, res) => {
    console.log(req.query);
    res.json({
        id: req.params.id
    });
});

router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.json({
        category: category,
        tag: tag
    });
});

module.exports = router;