const Log = require("../models/log");
const uuid = require("uuid");

module.exports = (options) => (req, res, next) => {
    const log = new Log();
    log.id = uuid.v4();
    log.component = options.component ?? 'DBLogger';
    log.severity = options.severity ?? 'Request';
    log.message = options.message ?? `${req.method} ${req.url}`;
    log.save().then(data => {
        next();
    });
}