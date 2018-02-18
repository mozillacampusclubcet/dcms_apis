var config = {
    'development': {
        mysql: {
            database: 'cet',
            username: 'your_mysql_username',
            password: 'your_mysql_password'
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
            databaseURL: "firebase_database_url"
        }
    }
  }
  var env = process.env.NODE_ENV || "development";
  module.exports = function(mode) {
    return config[mode || env]
  }
