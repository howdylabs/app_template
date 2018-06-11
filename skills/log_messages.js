module.exports = function(botkit) {

  botkit.middleware.receive.use(function(bot, message, next) {
    console.log('RCV:', message.type, message.text);
    next();
  })

  botkit.middleware.send.use(function(bot, message, next) {
    console.log('SND:', message.text, message.mid);
    next();
  })
}
