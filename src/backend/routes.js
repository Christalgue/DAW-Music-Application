// TODO: add password hashing? Not really necessary since we are not
//       really stocking it on disk except for the defalt test user
const routes = app => {
  let users = [
    { name: "DefaultUser", email: "default@default.com", password: "1234" }
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
};

module.exports = routes;
