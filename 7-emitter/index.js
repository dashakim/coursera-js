module.exports = {
    subscriptions: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        var events = Object.keys(this.subscriptions);
        if (events.indexOf(event) == -1) {
            this.subscriptions[event] = [];
        }

        var subsForEvent = this.subscriptions[event];
        var foundAt = -1;

        for (var i = 0; i < subsForEvent.length; i++) {
            var subAndHandlers = subsForEvent[i];
            if (subAndHandlers.subscriber == subscriber){
                foundAt = i;
                break;
            }
        }

        if (foundAt == -1){
            subsForEvent.push({subscriber: subscriber, handlers: [handler]})
        }
        else {
            subsForEvent[foundAt].handlers.push(handler);
        }
  
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        var subsForEvent = this.subscriptions[event];
        var foundAt = -1;

        for (var i = 0; i < subsForEvent.length; i++) {
            var subAndHandlers = subsForEvent[i];
            if (subAndHandlers.subscriber == subscriber){
                foundAt = i;
                break;
            }
        }

        if (foundAt != -1)
            subsForEvent.splice(foundAt, 1);

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        var subsForEvent = this.subscriptions[event];
        for (var i = 0; i < subsForEvent.length; i++) {
            var subAndHandlers = subsForEvent[i];
            for (var j = 0; j < subAndHandlers.handlers.length; j++) {
                var handler = subAndHandlers.handlers[j];
                var subscriber = subAndHandlers.subscriber;

                handler.call(subscriber);
            }
        }
        return this;
    }
};