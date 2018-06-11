var env = require('node-env-file');
env(__dirname + '/.env');

var config = {
  studio_token: process.env.studio_token,
  slack: {
    clientId: process.env.SLACK_CLIENTID,
    clientSecret: process.env.SLACK_CLIENTSECRET,
    scopes: ['bot','commands']
  }
}

var botkit = require('botkit')(config)

botkit.loadSkills(__dirname + '/skills');

botkit.boot();

botkit.on('booted', function() {
  console.log('✅  Boot complete');
  console.log('🤖  I am online');
  console.log('🤖  My admin interface: http://localhost:3000/');
})
