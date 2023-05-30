const sgMail = require("@sendgrid/mail");
const contactEmail = require("./emailTemplates/contactEmail");
exports.handler = async (event) => {
  console.log("Event:");
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "*"
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
      body: JSON.stringify({ message: "Successful preflight call." }),
    };
  } 
  
  const sendGridKey = process.env.SEND_GRID_KEY;
  if (event.httpMethod == "POST") {
    let body = event.body ? JSON.parse(event.body) : {};
    let response;
    if (body) {
      body = await sendEmail(body);
      response = {
        statusCode: 200,
        headers,
        body: JSON.stringify(body),
      };
    }
    return response;
  }

  const sendEmail = async (body) => {
    const { property, email } = body;
    sgMail.setApiKey(sendGridKey);

    const msg = {
      to: "moiscye@gmail.com",
      from: email,
      subject: property,
      text: "message field",
      html: contactEmail(body),
    };

    try {
      await sgMail.send(msg);
      return body;
    } catch (error) {
      if (error.response) {
        console.error(error.response);
        return error.response.body;
      }
    }
  };
};
