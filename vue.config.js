// 解决 less 引入问题
module.exports = {
  assetsDir: "./vue3_admin_test_pages",
  publicPath: "./",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
