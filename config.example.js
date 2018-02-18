var config = {
    'development': {
        mysql: {
            database: 'cet',
            username: 'Your mysql username',
            password: 'Your mysql password'
        },
        firebase: {
            databaseURL: ""
        }
    },
    'production': {
      mysql: {
            database: 'blah',
            username: 'blah',
            password: null
        },
        firebase: {
            databaseURL: "Enter firebase database url"
        }
    }
  }
  var env = process.env.NODE_ENV || "development";
  module.exports = function(mode) {
    return config[mode || env]
  }
