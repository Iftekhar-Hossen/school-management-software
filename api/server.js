require("dotenv").config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");
const minify = require("express-minify");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const { readdirSync } = require("fs");

const app = express();

app.use(minify());
app.use(cors());
app.use(express.json());
app.use(
    compression({
        level: 9,
    }),
);

readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, () => {
    console.log("Database connected.");
});

app.get("/status", (req, res) => {
    res.status(200).send({
        status: true,
    });
});

app.get("/", (req, res)=>{
    
})

// server
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

