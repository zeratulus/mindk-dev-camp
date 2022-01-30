const url = require("url");
const config = require("../services/config");

function log(msg) {
    console.log(`${new Date().toISOString()} -> ${msg}`);
}

function logObj(msg, obj) {
    console.log(`${new Date().toISOString()} -> ${msg}`);
    console.log(obj);
}

function processError(res, error) {
    let result = error.errors ? error.errors[0].message : error.message;
    if (config.app.isDebug) {
        log(error);
        result = error;
    }
    res.status(500).json(result);
}

function getPagination(req) {
    const limit = req.body.limit ? req.body.limit : 10;
    const offset = req.body.page ? req.body.page * limit : 0;

    return {limit, offset, page};
}

function getUrlSearchParamsFromRequest(req, params) {
    let results = [];
    for (let param in params) {
        if (req.body.has(param)) {
            results.push({
                key: param,
                value: req.body.get(param)
            });
        }
    }
    return results;
}

function getUrlFromRequest(req) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });
}

module.exports = {
    log,
    logObj,
    processError,
    getPagination,
    getUrlFromRequest
}