module.exports = {
    sessionSettings: {
        secret: 'secret secretary',
        resave: false,
        saveUninitialized: false,
        proxy: (process.env.NODE_ENV === 'production') ? true : false,
        cookie: (process.env.NODE_ENV === 'production') ? {
            httpOnly: true,
            // path: corsSettings.origin,
            // sameSite: 'lax',
            sameSite: 'none',
            secure: true,
            maxAge: 1000 * 60 * 10,
        } : null,
    },
    corsSettings: {
        origin: true,
        credentials: true,
        preflightContinue: true,
    }
}