import path from "path";
import { Configuration } from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfiguration } from "./config/build/buildWebpackConfiguration";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.relative(__dirname, "src"),
    };
    const mode = env.MODE || "development";
    const PORT = env.PORT || 3000;
    const isDev = mode === "development";


    const config: Configuration = buildWebpackConfiguration({
        mode,
        paths,
        port: PORT,
        isDev
    });
    return config;
};