module.exports = function(botkit) {


    botkit.addEars(function(trigger, message) {
        return new Promise(function(resolve, reject) {
            if (trigger.type && trigger.type=='greaterthan' && message.text) {
              console.log('TEST GREATERTHAN', trigger, message.text);
                var nums = message.text.match(/\b(\d+)\b/g);
                if (nums && nums.length > 0) {
                  for (var n = 0; n < nums.length; n++) {
                    console.log('IS ',nums[n],'>',trigger.pattern);
                    if (parseInt(nums[n]) > parseInt(trigger.pattern)) {
                      return resolve(true);
                    }
                  }
                  resolve(false);
                } else {
                  resolve(false);
                }
            } else {
                resolve(false);
            }
        });
    },'greaterthan','greater than');

    botkit.addEars(function(trigger, message) {
        return new Promise(function(resolve, reject) {
            if (trigger.type && trigger.type=='lessthan' && message.text) {
                var nums = message.text.match(/\b(\d+)\b/g);
                if (nums && nums.length > 0) {
                  for (var n = 0; n < nums.length; n++) {
                    if (parseInt(nums[n]) < parseInt(trigger.pattern)) {
                      return resolve(true);
                    }
                  }
                  resolve(false);
                } else {
                  resolve(false);
                }
            } else {
                resolve(false);
            }
        });
    },'lessthan','less than');


    botkit.hears({
        type: 'greaterthan',
        pattern: 100
    }, ['message', 'direct_message', 'direct_mention'], function(bot, message) {
        bot.reply(message, {
            text: 'THAT IS A BIG NUMBER.'
        }, function() {});
    });

}
