const express = require('express');
const router = express.Router();

// Importing FS packages to read from file
const {readFile, writeFile} = require('fs').promises;// Destructing, within {}

router.get('/', (req, res)=>{
    res.send('Word Home Page');
});
router.get('/wotd', async (req, res)=>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd', {word:word, part:part, definition:definition});
});//Callback function. Function calling a function. ex: get funtion (destination, fucntion2)

module.exports = router;

/*
This is written JAVA way. Using async/await synthax
*/
let getWordFromDictionary = async ()=>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');//this will become an array of strings, split via line \n
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');//splitting by the TAB spacing \t
        console.log(wordArray);
        return wordArray;
    } catch (err){
        console.log("There is an error reading the file:", err);
    }
}

