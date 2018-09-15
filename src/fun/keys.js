exports.handler = function (event, context, callback) {
    const keys = [{ email: process.env.EMAIL }, { pass: process.env.PASS }]

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(keys)
    });

}