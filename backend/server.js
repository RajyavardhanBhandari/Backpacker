const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const mongoose = require('mongoose');
const MONGO_URL="mongodb+srv://Siddhi_jain:Siddhijain18%40@cluster0.p9m2d3r.mongodb.net/sample_mflix?retryWrites=true&w=majority"
const userData= require('./userDetails/userModel');
const bodyparser = require("body-parser");

const connectdb = function() {
  mongoose.set("strictQuery", false);
  mongoose
      .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("MongoDB connected successfully"))
      .catch(err => console.log(err));
}
connectdb();
//session logic:
app.use(
    session({
      secret: "secret-key",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.get("/", (req, res) => {
    res.send("Hello, World!");
})


app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());
  app.use(cors());


app.post("/api/items", async (req, res) => {
  console.log('req.body', req.body)
  try {
    const newItem = new userData({
      name:req.body.name, 
      email:req.body.email
    });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

//establish http server:
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
