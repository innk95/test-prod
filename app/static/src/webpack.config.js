'use strict';

const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')

module.exports = [{
    mode: 'development',
    entry: ['./app/main.js'],
    watch: true,
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.join(__dirname, '/../'),
        filename: 'application.js'
    },

}]