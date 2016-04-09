var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path)
{
	return stylus(str).set('filename',path);
}


app.set('views',__dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(stylus.middleware ({
		src: __dirname + '/public',
		compile: compile
	}
));

app.use(express.static(__dirname + '/public'));
console.log("enviroment is " . env);
if (env === 'development') {
	console.log("development mode");
	mongoose.connect("mongodb://localhost/multivision");
}
else {
	console.log("production mode");
	mongoose.connect("mongodb://subha:Om_Om_123@ds011830.mlab.com:11830/subhavision");
}

var db = mongoose.connection;
db.on("error", console.error.bind(console,'connection error....'));
db.once('open', function callback(){
	console.log("multivision db opened");
});

var messageSchema = mongoose.Schema({message:String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;

//mongoMessage.save(function(err, doc) {
	Message.findOne().exec(function(err,messageDoc) {
	   mongoMessage = messageDoc.message;
	});
//});
/*
mongoMessage.save(function(err, doc) {
    Message.findOne().exec(function(err, messageDoc) {
        mongoMessage = messageDoc.message;
    });
});
*/


app.get('/partials/:partialPath', function (request,response) {
    console.log('partialPath log: '+request.params.partialPath);
    response.render('partials/'+request.params.partialPath);
})


app.get('*', function(request,response){
	response.render('index',{
		mongoMessage:mongoMessage
	});
	//response.render('partials/main');
} );

var port = process.env.PORT || 3030;
app.listen(port);

console.log("Listening on port " + port + "....");
