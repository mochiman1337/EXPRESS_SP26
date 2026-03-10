const express = require('express');
const router = express.Router();
const { readFile } = require('fs/promises');

router.get('/allwords', async (req, res) => {

    const data = await readFile('resources/allwords.txt', 'utf8');

    res.send(data);

});

module.exports = router;