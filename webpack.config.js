const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

let conf = {
    entry: path.join(__dirname, './src', 'Index'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: [
                                            'ie >= 10',
                                            'last 20 version'
                                        ],
                                        grid: true
                                    }),
                                    cssnano({ preset: 'default' })
                                ],
                                sourceMap: true,
                                minimize: true
                            }
                        }
                    ]
                })
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: [
                                            'ie >= 10',
                                            'last 20 version'
                                        ],
                                        grid: true
                                    }),
                                    cssnano({ preset: 'default' })
                                ],
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-bulk-import-loader'
                        }
                    ]
                })
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: path.join(__dirname, 'dist/assets/')
                        }
                    }
                ]
            },

            {
                test: /\.(woff|woff2)$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]'
            },

            {
                test: /\.ttf$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]'
            },

            {
                test: /\.eot$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]'
            },

            {
                test: /\.svg$/,
                loader:
                    'url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]'
            }
        ]
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
        open: true,
        hot: true,
        overlay: true
    },

    watchOptions: {
        ignored: /node_modules/
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),

        new ExtractTextPlugin('main.css')
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'source-map';
    return conf;
};