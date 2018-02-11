/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var functionObjects = Array.prototype.slice.call(arguments, 1);
    
    var selectFunctions = [];
    var filterFunctions = [];

    for (var i = 0; i < functionObjects.length; i++) {
        var f = functionObjects[i];
     
        if (f.type === 'select') {
            selectFunctions.push(f.func);
        }
        else {
            filterFunctions.push(f.func);
        }
    }

    var result = [];

    for (var ci = 0; ci < collection.length; ci++) {
        var element = copy(collection[ci]);

        var satisfiesFilter = true;
        for (var i = 0; i < filterFunctions.length; i++) {
            var shouldLeaveElement = filterFunctions[i];
            if (!shouldLeaveElement(element)){
                satisfiesFilter = false;
                break;
            }
        }

        if (!satisfiesFilter) 
            continue;

        for (var i = 0; i < selectFunctions.length; i++) {
            var selector = selectFunctions[i];
            element = selector(element);
        }

        result.push(element);        
    }

    return result;
}

function copy(elem){
    var result = {};
    for (var key in elem) {
        result[key] = elem[key];
    }
    return result;
}

/**
 * @params {String[]}
 */
function select() {
    keys = [].slice.call(arguments);
    return {
        type: 'select',
        func: function(elem){
            var result = {};
            for (var key in elem) {
                if (keys.indexOf(key) != -1){
                    result[key] = elem[key];
                }
            }
            return result;
        }
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return {
        type: 'filter',
        func: function(elem){
            return values.indexOf(elem[property]) != -1;
        }
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
