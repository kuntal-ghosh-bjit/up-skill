import { RuleSetRule } from 'webpack';
import Sass from 'sass';
import sassGlobImporter from 'node-sass-glob-importer';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const postCssLoader: RuleSetRule = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [autoprefixer(), cssnano()],
    },
  },
};

/**
 * Use Dart Sass instead of node-sass
 */
const sassLoader: RuleSetRule = {
  loader: 'sass-loader',
  options: {
    implementation: Sass,
    sassOptions: {
      importer: sassGlobImporter(),
    },
  },
};

// For Storybook
export const WebpackScssModuleStorybookRule: RuleSetRule = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', postCssLoader, sassLoader],
};
