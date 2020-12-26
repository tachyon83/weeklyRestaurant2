module.exports = {
    sessionSettings: {
        secret: 'secret secretary',
        resave: false,
        saveUninitialized: false,
    },
    corsSettings: {
        origin: true,
        credentials: true,
        preflightContinue: true,
    }
}