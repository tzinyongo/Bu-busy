const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/Bu-busy/' : '/',
  //transpileDependencies: ['vue-awesome'], // Add any dependencies that need to be transpiled
});
