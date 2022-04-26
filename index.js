const express = require('express');
const PORT = 3000;
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/user.routes.js")(app);

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    } else {
        console.log("Error occured, server can't start", error);
    }
});