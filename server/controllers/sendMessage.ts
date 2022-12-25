import type { NextApiRequest, NextApiResponse } from "next";
import SibApiV3Sdk from "sib-api-v3-sdk";

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_V3_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

type Data = { message: string };

export const sendMessage = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { name, email, message } = req.body;
  const modifiedName = name
    .split(" ")
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    sendSmtpEmail.subject = `New Message From ${modifiedName}`;

    sendSmtpEmail.htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-#equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
      <div style="max-width: 500px; margin: auto;">
          <h1 style="text-align: center; margin: 0; background-color: #0a192f; color: #e6f1ff; padding: 10px; text-transform: capitalize;">New Message from ${modifiedName}</h1>
          <div style="padding: 0 10px; margin: 0;">
              <p style="font-weight: 600; padding: 10px 0 0; margin: 0;">From ${email}</p>
              <time style="font-size: 12px; margin: 0; font-weight: 500;">On ${today}.</time>
              <p style="line-height: 2; padding: 0 10px; font-size: 16px;">
                  ${message}
              </p>
              <p style="font-size: 14px; font-weight: 600;">Remember to always treat as urgent.</p>
          </div>
          <footer style="text-align: center; font-size: 12px; color: #64ffda; background-color: #020c1b; padding: 10px;">
              This message was sent to you from ${email}
          </footer>
      </div>
  </body>
  </html>`;

    sendSmtpEmail.sender = {
      name: `${modifiedName}`,
      email,
    };

    sendSmtpEmail.to = [
      { email: process.env.USER_EMAIL, name: "Oluwatosin Ojo" },
    ];

    sendSmtpEmail.replyTo = {
      email,
      name: `${modifiedName}`,
    };

    sendSmtpEmail.headers = { "From-Tosin-Website": "%677hj>?gt1!fhhd" };

    sendSmtpEmail.params = {
      parameter: "Email Subject",
      subject: `New Message From ${modifiedName}`,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({ message: "Email Sent Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to send email" });
  }
};
