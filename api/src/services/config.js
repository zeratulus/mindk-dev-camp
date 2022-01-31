module.exports = {
    app: {
        port: process.env.APP_PORT || 8888,
        isDebug: process.env.DEV || false,
        dirStorage: process.env.APP_DIR_STORAGE || __dirname + '/storage/'
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_DATABASE || 'socialize',
    }
}