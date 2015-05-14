  
    var express = require('express');
    var app = express();

    require('node-jsx').install({extension:'.jsx'});/* Very important */

    app.set('port', (process.argv[2] || 3000));
    app.set('view engine', 'jsx');
    app.set('views', __dirname + '/views');
    app.engine('jsx', require('express-react-views').createEngine());

    app.use('/', function(req, res) {
      res.render('indexProps', '');
    });

    app.listen(app.get('port'), function() {});