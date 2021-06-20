module.exports = {
  configureWebpack: {},
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },

  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://unpkg.com/tailwindcss"),
          handler: "cacheFirst",
          method: "GET",
        },
        {
          urlPattern: new RegExp("img/icons"),
          handler: "cacheFirst",
          method: "GET",
        },
      ],
    },
    staticFileGlobs: ["dist/**/*.{js,html,css,png,svg}"],
  },
};
