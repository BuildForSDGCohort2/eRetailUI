module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { props: false }],
    "react/jsx-filename-extension": "off",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
