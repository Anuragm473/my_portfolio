import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssPresetEnv({
      browsers: 'last 2 versions', // Adjust as needed
    }),
    autoprefixer(),
  ],
};
