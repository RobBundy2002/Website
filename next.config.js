const path = require('path');

module.exports = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            path: require.resolve('path-browserify'),
        };
        return config;
    },
};
