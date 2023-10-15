module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["tsconfig.json"]
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    }
};
