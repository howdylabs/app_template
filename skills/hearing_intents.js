module.exports = function(botkit) {


    botkit.middleware.receive.use(function(bot, message, next) {

        if (message.text == 'intent') {
            message.intent = 'intent';
        }
        next();

    });

    botkit.addEars(function(trigger, message) {
        return new Promise(function(resolve, reject) {
            if (trigger.type && trigger.type=='intent' && message.intent && message.intent == trigger.pattern) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    },'intent','match an NLP intent');

    botkit.hears({
        type: 'intent',
        pattern: 'intent'
    }, ['message', 'direct_message', 'direct_mention'], function(bot, message) {
        bot.reply(message, {
            text: 'OH HELLO.'
        }, function() {});
    });

}
