module.exports = {
    entry:{
        index:"./todo.ts"
    },
    output:{
        filename: "./dist/[name].bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions:[".ts", ".js"]
    },
    devtool: "inline-source-map"
}