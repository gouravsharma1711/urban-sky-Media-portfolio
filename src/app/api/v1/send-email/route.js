import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { email, msg } = await req.json();
    if (!email || !msg) {
      throw new Error("Please Provide the Correct Data");
    }


    if (!process.env.MAIL_ID || !process.env.GOOGLE_APP_PASSWORD) {

      throw new Error("Environment variables not loaded");
    }
    
    
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      secure:true,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });
    
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: process.env.SEND_EMAIL_TO,
      subject:'Enquiry From Website',
      html: `
      <h3>New Message</h3>
      <p>Hi Your getting an Enquiry from ${email} the message is given Below : </p> 
      <p>${msg}</p>
      `,
    };
    
    const response= await transporter.sendMail(mailOptions);
    

    return NextResponse.json(
        {
            message: "Email Send Successfully",
            success: true,
            data:response
        },
        {
            status: 200
        }
    );
  } catch (error) {
    console.error("FULL NODEMAILER ERROR:", {
    message: error.message,
    code: error.code,
    response: error.response,
    responseCode: error.responseCode,
    command: error.command,
  });
    return NextResponse.json(
      
        {
            message: error.message,
            success: false,
        },
        { status: 500 }
        );
    }
}
