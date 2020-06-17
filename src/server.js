const app = require("./app");
const { errors } = require('celebrate');

app.use(errors());

app.listen(3333);
