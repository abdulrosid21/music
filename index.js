const expres = require("express");
const morgan = require("morgan");

const cors = require("cors");
const route = require("./routes/music");

const app = expres();
const port = 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(route);

app.listen(port, () => {
  console.log(`already running on port ${port}`);
});
