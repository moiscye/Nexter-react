const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/.netlify/functions/", {
      target: "https://admiring-newton-409cdd.netlify.app",
      pathRewrite: {
        "^/\\.netlify/functions": "",
      },
    })
  );
};
