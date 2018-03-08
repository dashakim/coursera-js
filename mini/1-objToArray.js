var names = [ 'James', 'Nick'];
var ages = [21, 33];

var arraysToObjects = (names, ages) => {
    if (names.length !== ages.length)
        throw new Exception("Invalid length");

    var results = [];
    var arraysLength = names.length;

    for (var i = 0; i < arraysLength; i++) {
        var obj = {
            name: names[i],
            age: ages[i]            
        };

        results.push(obj);
    }
    return results;
};

console.log(arraysToObjects(names, ages));