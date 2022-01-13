const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./services/config');
const sequelize = require('./services/db');
const models = require('./models/models');
const routes = require('./routes');
const {log} = require('./utils');

const app = express();
// app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);

const start = async () => {
    try {
        // await sequelize.authenticate();
        await sequelize.sync();

        app.listen(config.app.port, () => log(`Started at port: ${config.app.port}`));
    } catch (e) {
        log(`Exception: ${e.message}`);
    }
}

start();
