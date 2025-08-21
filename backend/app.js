const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ status: "backend works!" })
});

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("database connected!")
    }).catch((e) => {
        console.log(e);
    });

require('./schema/UserDetails');
const User = mongoose.model("UserInfo");

app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log("server is listening on port", process.env.PORT)
});

app.post('/register', async (req, res) => {
    const { name, email, mobile, password } = req.body;

    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
        return res.send({ data: "User already exists." });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            name,
            email,
            mobile,
            password: encryptedPassword,
        });

        res.send({ status: "ok", data: "user created" });
    } catch (error) {
        res.send({ status: "error", data: error });
    }
});