'use strict';
module.exports = function(app){
  var time=require('./controller');
  app.route('/').get(time.home);
app.route('/:timetype').get(time.show);
};