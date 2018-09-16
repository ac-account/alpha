exports.handler = function (event, context, callback) {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'diganluispa@gmail.com',
            pass: '1N3F9BLE'
        }
    });

    var mailOptions = {
        from: 'diganluispa@gmail.com',
        to: 'hola@luispa.im',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            callback(null, {
                statusCode: 502,
                body: JSON.stringify(error)
            });
        } else {
            console.log('Email sent: ' + info.response);
            callback(null, {
                statusCode: 200,
                body: 'Email sent: ' + info.response
            });
        }
    });
}