module.exports = {
    target: "experimental-serverless-trace",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
    env: {
        THEATER: 'https://staryiarbat.ru/',
        API: 'https://stariyarbat.herokuapp.com/graphql'
    }
};