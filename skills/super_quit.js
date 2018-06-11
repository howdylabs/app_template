/*

THIS MODULE IS DISABLED BY DEFAULT!

UNCOMMENT THE CODE BELOW TO ACTIVATE THIS FEATURE

This module causes your bot to listen for variations on the word "Quit"
and causes it to immediately quit any ongoing conversation.
*/

module.exports = function(controller) {

    controller.middleware.receive.use(function(bot, message, next) {

        if (message.text && message.text.match(/exit/i)) {
            controller.findSession(message.user, message.channel).then(function(session) {
                if (session) {
                    // stop the conversation and swallow this message
                    controller.endSession({context: message});
                    bot.reply(message,'Quitting.');
                } else {
                    // nothing ongoing, this message passes through
                    bot.reply(message,'Quitting.');
                    // next();
                }
            });
        } else {
            next();
        }

    });

}
