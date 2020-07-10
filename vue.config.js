module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/tell-me-a-joke/" : "/",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Tell me a joke";
      return args;
    });
  }
};
