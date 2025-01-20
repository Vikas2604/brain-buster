const nodemailer = require('nodemailer');

const handleContactSubmission = (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'brainbuster015@gmail.com',
            pass: 'nrts htlc daup ibkd'
        }
    });

    const mailOptions = {
        from: email,
        to: 'brainbuster015@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    console.log('Sending email with the following options:', mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email.' });
        }
        console.log('Email sent successfully:', info.response);
        return res.status(200).json({ success: 'Contact form submitted successfully!' });
    });
};

module.exports = { handleContactSubmission };
