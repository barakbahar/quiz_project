const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, you are on the GET route!");
});

app.post("/", (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const data = req.body;
  if (data) {
    console.log(`name: ${data.name} code: ${data.code}`);
    res.send(`Welcome ${data.name}`);
  } else {
    res.status(400).send("Data is missing");
  }
});

app.listen(PORT, "0.0.0.0", (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
