var path = require('path');

const PATHS = {
	// build: path.join(__dirname, 'target', 'classes', 'META-INF')
	build: path.join(__dirname, 'target', 'widget')
};

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/main/webapp/index.js'
    ],
    // output: {
    //     path: path.join(__dirname, 'build'),
    //     filename: 'bundle.js',
    //     publicPath: '/static/'
    // },
	output: {
		path: PATHS.build,
		filename: 'app-bundle.js'
	},
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
};
