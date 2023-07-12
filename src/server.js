const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//IMPORTAR E INSTANCIAR AS ROTAS

const contactRoutes = require("./routes/ContactRoutes");

require("dotenv").config();

//Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("Conectado no MONGODB");
  });

//Routes
// app.use("/api/user", userRoutes);
app.use("/api/contacts", contactRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/contents", contentRoutes);
const port = process.env.PORT || 3001;
//Start serv
app.listen(port, () => {
  console.log("listening on port:" + port + "! \u{1F430}");
});
