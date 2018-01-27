/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = getWords(tweet);
    var hashtags = []; 
    for (i = 0; i < words.length; i++){
        var word = words[i];
        if (word[0] == '#'){
            var partsOfWord = word.split('#');
            hashtags.push(partsOfWord[1]);
            
        }
    }

    return hashtags;
};

function getWords(str){
    return str.split(' ');
}