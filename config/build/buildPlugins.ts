import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const Dotenv = require("dotenv-webpack")


export const buildPlugins = (buildPath: string, isDev: boolean): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: buildPath
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new Dotenv()

    ];
};