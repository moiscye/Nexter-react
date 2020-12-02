const sgMail = require("@sendgrid/mail");
const contactEmail = require("./emailTemplates/contactEmail");
exports.handler = async (event) => {
  const sendGridKey = process.env.SEND_GRID_KEY;

  const sendEmail = (body) => {
    const { property, email } = body;
    sgMail.setApiKey(sendGridKey);
    let xyz = contactEmail(body);

    const msg = {
      to: "moiscye@gmail.com",
      from: email,
      subject: property,
      text: "message field",
      html: xyz,
    };

    console.log(xyz.substring(10, 300));
    sgMail.send(msg);
    console.log(xyz.substring(300, 310));
    return body;
  };

  if (event.httpMethod == "POST") {
    console.log("in POST");
    let body = event.body ? JSON.parse(event.body) : {};
    let response;
    if (body) {
      body = sendEmail(body);
      response = {
        statusCode: 200,
        body: JSON.stringify(body),
      };
    }
    return response;
  }

  if (event.httpMethod == "GET") {
    console.log("in GET");
    let response = {
      statusCode: 200,
      body: "Testing message",
    };
    return response;
  }
};
