const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require('mongoose');
const MONGO_URL="mongodb+srv://Siddhi_jain:Siddhijain18%40@cluster0.p9m2d3r.mongodb.net/sample_mflix?retryWrites=true&w=majority"

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
//establish http server:
const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
