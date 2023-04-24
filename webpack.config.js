const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    entry: {
        main: './src/assets/js/index.js',
        auth: './src/assets/js/auth.js',
        fontAwesome: './src/assets/js/font-awesome.js',
        tailwind: './src/assets/css/styles.css',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js',
        assetModuleFilename: './assets/[base]', // or => assetModuleFilename: './assets/uploads/[name][ext]'
        clean: true,
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 8080,
        open: true,
        compress: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                // options: {
                //     minimize: true, // html minify method 01
                // },
            },
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]',
                },
            },
            {
                test: /\.(mp4|webm|wmv)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/video/[name][ext]',
                },
            },
            {
                test: /\.(ttf|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['tailwind', 'main', 'fontAwesome'],
            inject: 'body',
            minify: {
                collapseWhitespace: true, // html minify method 02
                removeComments: true,
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['tailwind', 'auth', 'fontAwesome'],
            inject: 'body',
            minify: {
                collapseWhitespace: true, // html minify method 02
                removeComments: true,
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './src/register.html',
            chunks: ['tailwind', 'auth', 'fontAwesome'],
            inject: 'body',
            minify: {
                collapseWhitespace: true, // html minify method 02
                removeComments: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/[name].bundle.css',
            chunkFilename: './css/[id].css',
        }),
    ],
};

module.exports = config;
