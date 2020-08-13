const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(
	favicon(path.join(__dirname, 'build', 'favicon.ico'))
);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/form', cors());
app.post('/api/form', (req, res) => {
	const gmailLogin = process.env.GMAILLOGIN;
	console.log('gmailLogin', gmailLogin);
	const gmailPassword = process.env.GMAILPASSWORD;
	console.log('gmailPassword', gmailPassword);

	var name = req.body.name;
	console.log('name', name);
	var email = req.body.email;
	console.log('email', email);
	var subject = req.body.subject;
	console.log('subject', subject);
	var message = req.body.message;
	console.log('message', message);

	// https://ethereal.email/  used to set up a fake email for testing purposes
	// https://stackoverflow.com/questions/26196467/sending-email-via-node-js-using-nodemailer-is-not-working
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: gmailLogin,
			pass: gmailPassword,
		},
	});

	let mailOptions = {
		to: gmailLogin,
		replyTo: `${email}`,
		subject: `${subject}`,
		text:
			'Name: ' +
			name +
			'\nSubject: ' +
			subject +
			'\nEmail: ' +
			email +
			'\nMessage: ' +
			message,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			console.log(err);
			res.json({
				msg: 'fail',
			});
		} else {
			res.json({
				msg: 'success',
			});
		}
	});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
	console.log(`Express app listening on port ${PORT}`);
});

