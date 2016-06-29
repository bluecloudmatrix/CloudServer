/*******************************************************************************
* Qiushan
* 4/1/2016
*******************************************************************************/

var express = require('express');
var fs = require('fs');
var hbs = require('hbs');
var imagesEngine = require('./images');
var agency = require('./agency.js');

// handle post
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var bodyParser = require('body-parser');

// port&host setting
var settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));
// disable process.env.PORT for now as it cause problem on mesos slave
var port = (process.env.VMC_APP_PORT || process.env.VCAP_APP_PORT || settings.port);
var host = (process.env.VCAP_APP_HOST || 'localhost');

// underlying variables
var serverStarted = false;
var app = express();

// basic configuration
app.use(express.static(__dirname + '/public'));     	// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
//app.engine('.html', require('ejs').renderFile);

/******************
 * route listing
 *
 * post /order
 * get  /order
 * get  /services_listing
 * get  /square
 * get  /deploy_setting
 * get  /remove
 *****************/

app.post('/order', multipartMiddleware, function(req, res) {
	agency.get_processed_data(req.body, res);
});
app.get('/order', function(req, res) {
	agency.grabUsrServices(res);
});

app.get('/services_listing', function(req, res) {
    agency.grabUsrServices(res);
});

app.get('/square', function(req, res) {
	res.render('square', {entries:imagesEngine.getImagesEntries()});
});

app.get('/deploy_setting', function(req, res) {
	var image_name = imagesEngine.getImagesEntry(req.query.id).image;
	res.render('deploy_setting', {id:req.query.id, name:req.query.name, image:image_name});
});

app.get('/remove', function(req, res) {
	var name = req.query.name;
	agency.removeContainer(name, res)
});


// basic function
function startServer() {
	if (serverStarted ) return;
	serverStarted = true;
	app.listen(port);   
	console.log("Express server listening on port " + port);
}


// start the server
startServer();