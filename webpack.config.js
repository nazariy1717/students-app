var path = require('path');


module.exports = {

    entry: './src/styles/sass/',
    output: {
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};