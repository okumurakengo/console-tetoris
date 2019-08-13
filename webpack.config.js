/** @type import("webpack").Configuration */
module.exports = {
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
};
