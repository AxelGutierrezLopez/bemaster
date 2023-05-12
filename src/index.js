const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require("path")

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use(require('./routes/ejercicio01'));
app.use(require('./routes/ejercicio02'));
app.use(require('./routes/ejercicio03'));

// START
app.listen(app.get('port'),() =>{
  console.log(`Server on port ${app.get('port')}`);
});
