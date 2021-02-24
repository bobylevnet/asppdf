
module.exports = {
    devServer: {
        proxy: 'http://localhost:89/',
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}