app.post('/process', function(req, res){
    const mailer = require('nodemailer');
    const smtp = require('nodemailer-smtp-transprt');

    async function mailJet(){
        const transport = mailer.createTransport(
            smtp({
                host: 'in.mailjet.com',
                port: 2525,
                auth: {
                    user: process.env.MAILJET_API_KEY || 'insert key here',
                    pass: process.env.MAILJET_API_SECRET || 'insert key here',
                },
            })
        );
        const json = await transport.sendMail({
            from: 'afcplushies@gmail.com',
            to: 'afcplushies@gmail.com',
            subject: req.body.email,
            text: req.body.ques, 
        });
        console.log(json);
    }
    res.redirect(303, '/thankyou.html');
    mailJet();
});