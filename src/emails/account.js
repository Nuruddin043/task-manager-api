const sgMail=require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)




const sendWelcomeMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'mdnuruddin044@gmail.com',
        subject:'Thanks for joining in',
        text:`welcome to the app, ${name}.let me know how you get along with the app`

    })
}
const sendGoodbyeMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'mdnuruddin044@gmail.com',
        subject:'Thanks for using our service',
        text:`hey, ${name}.it will be great for us ,if you let us know about,why did
        you quit our services`

    })
}

module.exports={
    sendWelcomeMail,
    sendGoodbyeMail
}