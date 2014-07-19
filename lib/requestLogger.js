var Datastore = require('nedb'),
  db = new Datastore({
    filename: '_datastore',
    autoload: true
  });

module.exports = function() {
  return function * requestLogger(next) {
    var startTime = new Date()
      .getTime();
    yield next;
    var ctx = this;
    var endTime = new Date()
      .getTime();
    db.insert({
      url: ctx.url,
      date: new Date(),
      user_agent: ctx.header['user-agent'],
      ip: ctx.header['x-forwarded-for'],
      responseTime: endTime - startTime
    });
  };
};