require("dotenv").config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const { readdirSync } = require("fs");


const app = express();

app.use(cors());
app.use(express.json());
app.use(compression({
    level: 9
}))

readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));


// mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:admin@school.l6qhhxy.mongodb.net/school?retryWrites=true&w=majority", () => {
    console.log("Database connected.");
});




// server 
app.listen(PORT, () => {
    console.log(`Listing of port ${PORT}`);
});


