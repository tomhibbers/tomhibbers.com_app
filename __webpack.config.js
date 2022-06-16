const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const webpack = require('webpack');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.entry.app.unshift('babel-polyfill')
    config.plugins.push(new webpack.DefinePlugin({
      process: { env: {} }
    }))
    config.resolve.extensions.push('.web.js', '.js')
    config.module.rules.forEach(r => {
        if (r.oneOf) {
            r.oneOf.forEach(o => {
                if (o.use && o.use.loader && o.use.loader.includes('babel-loader')) {
                    o.include = [
                        path.resolve('.'),
                        path.resolve('node_modules/@ui-kitten/components'),
                    ]
                }
            })
        }
    })
    return config;
};
