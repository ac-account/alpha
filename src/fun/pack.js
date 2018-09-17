exports.handler = function (event, context, callback) {
    const nodemailer = require('nodemailer');

    const body = JSON.parse(event.body);
    const email = body.email;
    const name = body.name;
    const message = body.message; // message


    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(`smtps://diganluispa%40gmail.com:1N3F9BL3@smtp.gmail.com`);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Alpha Captura Website" <info@alphacaptura.com>', // sender address
        to: 'hola@luispa.im, paulypeligroso1@gmail.com', // list of receivers
        subject: 'New Alpha Captura Message', // Subject line
        text: 'Hello world ?', // plaintext body
        html: `
        <h1>You have a new message from alphacaptura.com</h1>
        <h2>Information:</h2>
        <p><b>Name: </b> ${name} <p>
        <p><b>Email Address: </b> ${email} <p>
        <p><b>Message: </b> ${message} <p>
        ` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        callback(null, {
            statusCode: 200,
            body: true
        });

    });

}