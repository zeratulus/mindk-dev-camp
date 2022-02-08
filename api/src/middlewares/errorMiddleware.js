const config = require("../services/config");

module.exports = (err, req, res, next) => {
    console.error(err);
    let message = `Oops something went wrong =[`;
    if (config.app.isDebug) {
        message = err;
    }
    res.status(500).json(message);
}