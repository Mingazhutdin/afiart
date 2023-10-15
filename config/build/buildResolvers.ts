import { ResolveOptions } from "webpack";

export const buildResolvers = (src: string): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [src, "node_modules"],
        mainFiles: ["index"],
        alias: {}
    };
};