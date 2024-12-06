const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Uploads");
    },
    filename: function (req, file, cb) {
        const now = new Date();
        const timestamp = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
            .format(now)
            .replace(/[/, :]/g, "-");
        cb(null, timestamp + "-" + file.originalname.replace(/\s+/g, "-"));
    },
});

exports.upload = multer({storage: storage}).single("file");
