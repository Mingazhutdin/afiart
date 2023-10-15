import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|eot|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyDefaultValue: true
                        }
                    ]
                ]
            }
        }
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [

            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.\w+$/i,
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    }
                },
            },
            "sass-loader",
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoader
    ];
};