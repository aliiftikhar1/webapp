const nodemailer = require("nodemailer");
const { ADMIN_MAIL } = require("../config/constant");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service:'gmail' ,
      port: 465 ,
      host: 'smtp.gmail.com',
      auth: {
        user: 'theitxprts@gmail.com',
        pass: 'DildilPakistan786@786@waqas',
      },
    });
    //console.log(transporter);
    let details = { from: ADMIN_MAIL, to: email, subject: subject, text: text };

    await transporter.sendMail(details,(err)=>{
      if(err){
        console.log("ERROR:->>>>>>>>>>>>>");
        console.log(err);
      }
      else{
        console.log("email sent sucessfully");
      }
    });
   
  } catch (error) {
    console.log("email not sent");
    console.log(error);
    throw err;
  }
};

module.exports = sendEmail;
