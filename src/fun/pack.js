exports.handler = function (event, context, callback) {
    const nodemailer = require('nodemailer');

    const body = JSON.parse(event.body);
    const email = body.email;
    const name = body.name;
    const message = body.message;

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(`smtps://${process.env.EMAIL}:${process.env.PASS}@smtp.gmail.com`);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
        to: 'hola@luispa.im, paulypeligroso1@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b>' // html body
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