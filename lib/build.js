import webpack from 'webpack';
import webpackConfig from '../webpack.config';

// Not needed, needed for dev specific config in a .babelrc file
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production. This may take some time.');

webpack(webpackConfig).run(err, stats => {
  if (err){
    console.log (err);
    return 1;
  }
  return 0;
});