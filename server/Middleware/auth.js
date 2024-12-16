const jwt = require("jsonwebtoken");
const User = require("../Models/User");
exports.auth = async (req, res, next) => {
    try {
        const token = req.headers["authtoken"];
        if (!token) {
            return res.status(401).send("No Token");
        }
        const decoded = jwt.verify(token, "jwtsecret");
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send("Token Invialid");
    }
};

exports.adminCheck = async (req, res, next) => {
    try {
        const userAdmin = await User.findOne({name: req.user.name}).select("-password").exec();
        if (userAdmin.role !== "admin") {
            return res.status(403).send("Admin Access Denied");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
        res.status(403).send("Admin Access Denied");
    }
};
