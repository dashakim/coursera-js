module.exports = {
    subscriptions: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.getSubscription(event, subscriber).handlers.push(handler);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        this.getSubscription(event, subscriber).handlers = [];
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        var subsForEvent = this.subscriptions[event] || [];
        for (var i = 0; i < subsForEvent.length; i++) {
            var subAndHandlers = subsForEvent[i];
            var handlers = subAndHandlers.handlers;
            var subscriber = subAndHandlers.subscriber;
            
            for (var j = 0; j < handlers.length; j++) {
                var handler = handlers[j];
                handler.call(subscriber);
            }
        }
        return this;
    },
    
    getSubscription: function(event, subscriber){
        this.subscriptions[event] = this.subscriptions[event] || [];

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
            var subAndHandlers = {subscriber: subscriber, handlers: []};
            subsForEvent.push(subAndHandlers);
            return subAndHandlers;
        }

        return subsForEvent[foundAt];
    }
};