const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const folderPath = path.resolve(__dirname, "./src/");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const pages = [
    new LiveReloadPlugin({
        appendScriptTag: true
    }),
    new HtmlWebpackTagsPlugin({
        hash: true,
        append: false,
        tags: [
            './assets/css/style.css',
            '/static/vendor/modernizr-detectizr.js'
        ]
    }),

    new HtmlWebPackPlugin({
        title : 'SG medical',
        description: 'SG medical - index',
        hash: true,
        template: './src/index.html',
        chunks: ['index','style'],
        filename:'index.html',
        HTML_PATH: folderPath
    }),


];

module.exports = pages;

