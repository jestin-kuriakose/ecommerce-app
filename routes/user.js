const router = require('express').Router();

router.get('/orders', (req, res) => {
    res.json("orders api")
})

router.get('/', (req, res) => {
    const username = req.body;
    console.log(username)
})

router.post('/user', (req, res) => {
    const username = req.body.username;
    res.json("your username is " + username)
})

module.exports = router;