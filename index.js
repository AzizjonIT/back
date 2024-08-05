const jsonServer = require("json-server");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

app.use(middlewares);
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
