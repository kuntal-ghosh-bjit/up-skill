const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];
    config.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
      fallback: {
        fs: false,
        path: false,
      },
    };
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
      '@images': path.resolve(__dirname, '../src/assets/images/'),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [autoprefixer(), cssnano()],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
