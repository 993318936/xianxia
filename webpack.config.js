/**
 * Created by lilinhui on 17/3/21.
 */
const path = require('path'),
    webpack = require('webpack'),
    ManifestPlugin = require('webpack-manifest-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    fs = require("fs"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function (env) {
    var config = {
        context: path.join(__dirname, "./resources/assets/front/"),
        entry: {
            vendor: ["vue", "vue-router", "axios", "vuex","element-ui"],
            main: "./js/main"
        },
        output: {
            path: path.join(__dirname, "/public/build/webpack"),
            filename: "main.[chunkhash:8].js",
            publicPath: "./../webpack/",
            chunkFilename: "[name].[chunkhash:8].js"
        },
        target: 'web',
        resolve: {
            extensions: ['.js', '.vue'],
            modules: ["./node_modules"],
            alias: {
                "vue$": "vue/dist/vue.min.js"
            }
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vendor", "meta"],
                filename: "[name].[chunkhash:8].js",
                minChunks: Infinity
            }),
            new CleanWebpackPlugin(["webpack"], {
                root: path.join(__dirname, "/public/build"),
                verbose: false
            }),
            new ExtractTextPlugin({
                filename: "[name].[contenthash:8].css",
                allChunks: true
            }),
            new ManifestPlugin({
                fileName: "./../rev-manifest.json",
                basePath: "/public/build/webpack/"
            }),
            new HtmlWebpackPlugin({
                title: "Xianxia House",
                template:path.join(__dirname,"/resources/views/front/","index.html")
            })
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: "css-loader",
                                fallback: "vue-style-loader"
                            })
                        }
                    }
                },
                {
                   test:/\.html$/,
                    loader:'html-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                    loader: 'file-loader?name=[hash:8].[name].[ext]'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {module: false}]],
                        plugins: ['transform-runtime']
                    }
                },
                {
                    test: /\.less$/,
                    exclude: /^node_modules$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{loader: "css-loader"}, {loader: "less-loader"}]
                    })
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
                }
            ]
        },
        watch: !env.production
    };
    if (env.production) { // 生产环境
        const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
        config.plugins = (config.plugins || [])
            .concat([
                new UglifyJSPlugin()
            ]);
    } else { // 开发环境
        config.devtool = 'eval-source-map';
    }
    return config;
};