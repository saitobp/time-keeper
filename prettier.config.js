/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  arrowParens: "always",
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  trailingComma: "all"
};

export default config;
