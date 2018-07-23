var path = require('path');
var webpack = require('webpack');
module.exports = {
    // where to start parsing javascript
    // this will also parse dependencies of app.js
    entry: './index.js',
    // where to store newly built javascript
    output: {
        // it's path on where to put the new files
        path: path.resolve(__dirname, 'dist'),
        // the new file's name
        filename: 'app.bundle.js'
    },
    // how to parse the files
    module: {
        rules: [
            // using babel on js files:
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    // use babel to parse es6
                    presets: ['env']
                }
            }
        ]
    },
    // show colors with the outputs
    stats: {
        colors: true
    },
    // use a source-map to help in development
    devtool: 'source-map'
}