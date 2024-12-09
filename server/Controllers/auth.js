const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
    try {
        // Check User
        const {name, password} = req.body;

        let user = await User.findOne({name});
        if (user) {
            return res.send("User already exists");
        }
        // Encrypt
        const salt = await bcrypt.genSalt(10);
        user = new User({
            name,
            password,
        });
        user.password = await bcrypt.hash(password, salt);
        // Save
        await user.save();
        res.send("Register Success");
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};
exports.login = async (req, res) => {
    try {
        const {name, password} = req.body;
        const user = await User.findOneAndUpdate({name}, {new: true});
        // Check User
        if (!user) {
            return res.status(400).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid Password");
        }
        // Payload
        const payload = {
            user: {
                name: user.name,
                role: user.role,
            },
        };
        // Genarate Token
        jwt.sign(payload, "jwtsecret", {expiresIn: "1d"}, (err, token) => {
            if (err) throw err;
            res.json({token, payload});
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};

exports.curentUser = async (req, res) => {
    try {
        console.log("Current User", req.user);
        const user = await User.findOne({name: req.user.name}).select("-password").exec();
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
};
