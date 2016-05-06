var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service:'Yahoo',
		auth:{
			user:'moinul_shaon@ymail.com',
			pass:'Shajeda@15'
		}
	});

	var mailOption={
		from :'moinul_shaon@ymail.com',
		to :'moinul.shaon@gmail.com',
		subject : 'website submission',
		text: 'You have a new submission with following details...\n Name: '+
			req.body.name+ '\nEmail: '+req.body.email+
			'\nDesc.: '+req.body.message,
		html: '<p>You have a new submission with following details...</p>'+
		'<ul><li>Name: '+req.body.name+'</li>'+
		'<li>Email: '+req.body.email+'</li>'+
		'<li>Desc.: '+req.body.message+'</li>'
	}

	transporter.sendMail( mailOption, function(err,info){
		if ( err ){
			console.log(err);
			res.redirect('/');
		}else{
			console.log('Mesage sent: ' + info.response );
			res.redirect('/');	
		}
	} );
});


module.exports = router;
