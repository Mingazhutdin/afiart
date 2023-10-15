import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfiguration = ({ mode, paths, port, isDev }: BuildOptions): Configuration => {
    return {

        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(paths.src),
        plugins: buildPlugins(paths.html, isDev),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };
};