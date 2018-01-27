/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = getUniqueHashtags;

function getUniqueHashtags(words) {
    var hashtags = []; 
    for (i = 0; i < words.length; i++){
        var lowerword = words[i].toLowerCase();
        var foundUnique = hashtags.indexOf(lowerword);

        if (foundUnique == -1){
            hashtags.push(lowerword);
        }
    }

    return hashtags.join(', ');
}