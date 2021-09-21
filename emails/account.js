require("dotenv").config()

const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adarshtyagi044@gmail.com',
        subject: 'Thanks for joining us.',
        text: `Hello ${name}, welcome to our platform. We are happy to have you as our user.`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: "adarshtyagi044@gmail.com",
      subject: `Goodbye ${name}`,
      text: `Hi ${name}, sorry to see that you are leaving our platform. We will be happy to listen from you in future as our user.`,
    });
}

module.exports = {sendWelcomeEmail, sendByeEmail}