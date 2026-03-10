const express = require('express');
const router = express.Router();

// Importing FS packages to read from file
const {readFile, writeFile} = require('fs').promises;// Destructing, within {}
router.get('/', (req, res)=>{
    res.send('Word Home Page');
});

//Callback function. Function calling a function. ex: get funtion (destination, fucntion2)
router.get('/wotd', async (req, res)=>{
    let wordArray = await getWordFromDictionary();
    let [word, part, definition] = wordArray;
    res.render('wotd', {word:word, part:part, definition:definition});
});

//This is written JAVA way. Using async/await synthax
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

//This is "Adding page to allwords route" for WOTD HW
router.get('/allwords', async (req, res) => {
    try {
        let data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');//splitting in new lines
        let finalList = [];//array
        for (let i = 0; i < lines.length; i++) {
            
            if (lines[i] !== "") {
                let part = lines[i].split('\t');//takes notes of tabs /t
                //console.log(parts);//system.out.println() Debug only
                finalList.push(part);//push = adding to array
            }
        }
        finalList.sort(function(a, b) {
            if (a[0] < b[0]) { 
                return -1; // Put 'a' before 'b'
            }
            if (a[0] > b[0]) { 
                return 1;  // Put 'b' before 'a'
            }
            return 0; // They are the same, don't move them
        });
        res.render('allwords', { allMyWords: finalList });
    } catch (err) {
        console.log("Error reading allwords file:", err);
    }
});

module.exports = router;//This must always stay at bottom