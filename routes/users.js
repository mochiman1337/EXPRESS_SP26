const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});
// the "/" means whatever is in this current folder, if "/users" its in the users folder

router.get('/new', (req, res)=>{
    res.send('User New Form');
});

module.exports = router;