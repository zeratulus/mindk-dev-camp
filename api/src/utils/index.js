const config = require("../services/config");

function log(msg) {
    console.log(`${new Date().toISOString()} -> ${msg}`);
}

function processError(res, error) {
    let result = error.errors ? error.errors[0].message : error.message;
    if (config.app.isDebug) {
        log(error);
        result = error;
    }
    res.status(500).json(result);
}

module.exports = {
    log,
    processError
}