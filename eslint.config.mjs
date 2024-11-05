import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {
    ignores: ["**/*.spec.jsx"]
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react: pluginReact
    },
    settings: {
      react: {
        version: 'detect'
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier
];
