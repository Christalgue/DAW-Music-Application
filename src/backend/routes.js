// TODO: add password hashing? Not really necessary since we are not
//       really stocking it on disk except for the defalt test user

const uuid = require("uuid/v4");

const routes = app => {
  let users = [
    {
      name: "DefaultUser",
      email: "default@default.com",
      password: "1234",
      token: "already-expired"
    }
  ];

  app.post("/api/signup", function(req, res) {
    try {
      let incomingUser = req.body;

      if (users.find(user => user.email === incomingUser.email) !== undefined)
        throw "User already taken.";

      users.push(incomingUser);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(400);
    }
  });

  app.post("/api/login", function(req, res) {
    try {
      let incomingUser = req.body;
      let correspondingUserIndex = users.findIndex(
        user => user.email === incomingUser.email
      );

      if (correspondingUserIndex === -1) {
        throw "User does not exist.";
      } else {
        if (incomingUser.password !== users[correspondingUserIndex].password)
          throw "Password does not match.";
      }

      const token = uuid();
      users[correspondingUserIndex].token = token;
      console.log(users);
      res.send(JSON.stringify({ token: token }));
    } catch (err) {
      res.sendStatus(400);
    }
  });

  app.post("/api/auth", function(req, res) {
    try {
			let token = req.body.token;
			console.log(token);
      let correspondingUserIndex = users.findIndex(
        user => user.token === token
			);
			console.log(correspondingUserIndex);

      if (correspondingUserIndex === -1) {
        throw "Expired or invalid token.";
      }

      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(400);
    }
  });
};

module.exports = routes;
