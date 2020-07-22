const path = require("path");

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Lifehacker Stoloto',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@cmp": path.resolve(__dirname, 'src/components'),
                "@img": path.resolve(__dirname, 'src/assets/img'),
                "@assets": path.resolve(__dirname, 'src/assets')
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
}
