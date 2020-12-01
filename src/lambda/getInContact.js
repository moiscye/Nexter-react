const sgMail = require("@sendgrid/mail");
const contactEmail = require("./emailTemplates/contactEmail");
exports.handler = async (event) => {
  const sendGridKey = process.env.SEND_GRID_KEY;

  const sendEmail = (body) => {
    const { property, email } = body;

    sgMail.setApiKey(sendGridKey);
    const msg = {
      to: "moiscye@gmail.com",
      from: email,
      subject: property,
      text: "message field",
      html: contactEmail(body),
    };

    sgMail.send(msg);
    return body;
  };

  if (event.httpMethod == "POST") {
    let body = event.body ? JSON.parse(event.body) : {};
    let response;
    if (body) {
      body = sendEmail(body);
      response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: JSON.stringify(body),
      };
    }
    return response;
  }
};
