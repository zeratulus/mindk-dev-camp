const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./services/config');
const sequelize = require('./services/db');
const models = require('./models/models');
const routes = require('./routes');
const {log} = require('./utils');
const logMiddleware = require('./middlewares/logMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost'] }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use(errorMiddleware);
app.use(logMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});

        app.listen(config.app.port, () => log(`Started at port: ${config.app.port}`));
    } catch (e) {
        log(`Exception: ${e.message}`);
    }
}

start();
