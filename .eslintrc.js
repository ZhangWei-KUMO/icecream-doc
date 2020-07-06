module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    indent: ["warn", 2],
    "comma-dangle": ["error", "never"],
    semi: ["warn", "always"],
    quotes: ["warn", "double"]
  }
};
