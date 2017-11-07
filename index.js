var express = require('express');

var app = express();
var indexRouter = require('./routes/index');
var pRouter = require('./routes/p_index');
var comicRouter = require('./routes/comic');
var pDIRouter = require('./routes/p_daily_illust');
var ajtRouter = require('./routes/ajax_test');

app.use('/', indexRouter);
app.use('/p',pRouter);
app.use('/comic',comicRouter);
app.use('/pdi',pDIRouter); //no bug version, daily pic
app.use('/ajt',ajtRouter);

app.listen(3002,function(){
    console.log('app is listening at port 3002');
});