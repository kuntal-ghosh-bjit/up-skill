/** @type {import('next').NextConfig} */
const path = require("path");
const globImporter = require("node-sass-glob-importer");

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    importer: globImporter(),
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
