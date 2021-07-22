const path = require("path");
const mail = require("./nodemailer");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });

  app.post("/send", (req, res) => {
    if (!req.body.userName || !req.body.userEmail || !req.body.userMessage)
      res.sendStatus(400);

    mail({
			from: '<khusanali2000@gmail.com>',
      to: "husanalimov2@gmail.com, khusanali2000@gmail.com",
      subject: "Письмо от пользователя " + req.body.userName + ' с сайта ALIMOVS',
      html: `<h3>Имя: ${req.body.userName} </h3>
			<h3>Email: ${req.body.userEmail} </h3>
			<h3>Тема:</h3>
			<pre style="font-size: 18px;">${req.body.userMessage}</pre>`,
    });

    res.redirect("/");
  });

  app.use((req, res, next) => {
    res.status(404).send(`
    <center>
        <h2><strong>404</strong></h2>
        <p>This page not found</p>
    </center>
    `);
  });
};
