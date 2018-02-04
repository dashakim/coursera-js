/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (dateString) {
    var date = new Date(dateString);
    var dateObject = {
        get value() {
            var year = date.getFullYear(); 
            var month = toLeadingZero(date.getMonth() + 1);
            var day = toLeadingZero(date.getDate());
            var hour = toLeadingZero(date.getHours());
            var minute = toLeadingZero(date.getMinutes());

            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        },
        add: function(value, type){
            if (value < 0) 
                throw new TypeError('Value is negative');

            return this.setDate(value, type);
        },
        subtract: function(value, type){
            if (value < 0) 
                throw new TypeError('Value is negative');

            return this.setDate(-value, type);
        },
        setDate: function(value, type){
            if(type === 'years')
                date.setUTCFullYear(date.getUTCFullYear() + value, date.getUTCMonth(), date.getUTCDate());
            else if (type === 'months')
                date.setUTCMonth(date.getUTCMonth() + value);
            else if (type === 'days')
                date.setUTCDate(date.getUTCDate() + value);
            else if (type === 'hours')
                date.setUTCHours(date.getUTCHours() + value);
            else if (type === 'minutes')
                date.setUTCMinutes(date.getUTCMinutes() + value);
            else
                throw new TypeError('Unknown type ' + type);

            return this;
        }
    };

    return dateObject;
};

function toLeadingZero(value) {
    return (value > 9 ? '' : '0') + value;
}