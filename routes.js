const router = require('express').Router();
    
router.get('/', (req, res)=>{
    const {page, total} = req.query;
    res.send ({
        status:'succesfully',
        message: 'Welcome to My Task',
        page ,
        total

    });
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