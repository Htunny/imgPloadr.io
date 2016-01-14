var models = require('../models'),
    async = require('async');

module.exports = {
  newest: function(callback) {
    models.Comment.find({}, {}, { limit: 5,
    sort: { 'timestamp': -1 } },
  function(err, comments){
    //to do...
  });
  }
};
