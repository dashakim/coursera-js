var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var args = command.split(' ');
    var cmd = args[0];

    if (cmd == 'ADD')
        return add(args[1], args[2].split(','));
    if (cmd == 'REMOVE_PHONE')
        return remove(args[1]);
    if (cmd == 'SHOW')
        return show();
};

function add(name, phones) {
    if(!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phones; 
    }
    else {
        phoneBook[name] = phoneBook[name].concat(phones);
    }

    return 'ADD';
}

function remove(phone) {
    var names = Object.keys(phoneBook);
    var deleted = false;

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var phones = phoneBook[name];
        var deleteAt = phones.indexOf(phone);
        
        if (deleteAt != -1) {
            phones.splice(deleteAt, 1);
            deleted = true;
        }
    }

    return deleted;
}

function show() {
    var names = Object.keys(phoneBook);
    names.sort();

    var result = [];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var phones = phoneBook[name];
        
        if (phones.length > 0){
            result.push(`${name}: ${phones.join(', ' )}`);
        }
    }

    return result;
}