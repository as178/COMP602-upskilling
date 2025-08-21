const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ data: "User doesn't exist." });
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, process.env.JWT_SECRET);

        if (res.status(201)) {
            return res.send({ status: "ok", data: token });
        } else {
            return res.send({ error: "error" });
        }
    }
});

app.post("/userdata", async (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        const userEmail = user.email;

        User.findOne({ email: userEmail }).then((data) => {
            return res.send({ status: "ok", data: data })
        })
    } catch (error) {
        return res.send({ error: error })
    }
})