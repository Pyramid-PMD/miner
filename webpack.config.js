const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer');
module.exports = {

    // watch: true,

    target: 'electron-renderer',

    entry: './app/src/index.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'stage-2'],
                }
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.(woff|woff2|eot|ttf)/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: '[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(
                            Object.assign(
                                {
                                    fallback: {
                                        loader: require.resolve('style-loader'),
                                        options: {
                                            hmr: false,
                                        },
                                    },
                                    use: [
                                        {
                                            loader: require.resolve('css-loader'),
                                            options: {
                                                importLoaders: 1,
                                                // minimize: true,
                                                // sourceMap: true,
                                                modules: true,
                                                // import: true
                                            },
                                        },
                                        // {
                                        //     loader: require.resolve('postcss-loader'),
                                        //     options: {
                                        //         // Necessary for external CSS imports to work
                                        //         // https://github.com/facebookincubator/create-react-app/issues/2677
                                        //         ident: 'postcss',
                                        //         plugins: () => [
                                        //             require('postcss-flexbugs-fixes'),
                                        //             autoprefixer({
                                        //                 browsers: [
                                        //                     '>1%',
                                        //                     'last 4 versions',
                                        //                     'Firefox ESR',
                                        //                     'not ie < 9', // React doesn't support IE8 anyway
                                        //                 ],
                                        //                 flexbox: 'no-2009',
                                        //             }),
                                        //         ],
                                        //     },
                                        // },
                                    ],
                                }
                            )
                        ),
                    },
                    {
                        test: /\.(scss|sass)$/,
                        loader: ExtractTextPlugin.extract(
                            Object.assign(
                                {
                                    fallback: {
                                        loader: require.resolve('style-loader'),
                                        options: {
                                            hmr: false
                                        },
                                    },
                                    use: [
                                        {
                                            loader: require.resolve('css-loader'),
                                            options: {
                                                importLoaders: 1,
                                                minimize: true,
                                            },
                                        },

                                        {
                                            loader: require.resolve('sass-loader')
                                        },
                                        {
                                            loader: require.resolve('postcss-loader'),
                                            options: {
                                                // Necessary for external CSS imports to work
                                                // https://github.com/facebookincubator/create-react-app/issues/2677
                                                ident: 'postcss',
                                                plugins: () => [
                                                    require('postcss-flexbugs-fixes'),
                                                    autoprefixer({
                                                        browsers: [
                                                            '>1%',
                                                            'last 4 versions',
                                                            'Firefox ESR',
                                                            'not ie < 9', // React doesn't support IE8 anyway
                                                        ],
                                                        flexbox: 'no-2009',
                                                    }),
                                                ],
                                            },
                                        },
                                    ],
                                })
                        ),
                    },
                    {
                        // test: /\.(png|jpg|gif|svg)$/,
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                        }
                    }
                ]
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin({
            publicPath: 'build/',
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}
