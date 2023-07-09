// Import packages
const express = require("express");
const users = require("./routes/users");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/users", users);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
