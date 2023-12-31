import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    //find the user and update the user (based on the email type)
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "c9f50cd43233c2",
        pass: "16f702432588f3",
        // TODO: add these credentials to .env file
      },
    });

    const mailOptions = {
      from: "benjaminsamuel.ytpurpose@gmail.com",
      to: email,
      subject:emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/
      verifyemail?token=${hashedToken}">here</a> to 
      ${ emailType === "VERIFY" ? "Verify your email" : "Reset your password"}
      or copy and paste the link below in your browser.
      <br>${process.env.DOMAIN}/
      verifyemail?token=${hashedToken}</p>`
    };

   const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
