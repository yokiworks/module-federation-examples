const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  experimental: { modern: false },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    // config.output.enabledLibraryTypes = []
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "next_app",
        library: { type: config.output.libraryTarget, name: "next_app" },
        filename: "remoteEntry.js",
        remotes: {
          app2: "app2",
        },
        exposes: {
          OtherPage: "./pages/other.js",
        },
        // sharing code based on the installed version, to allow for multiple vendors with different versions
        // shared: ["react", "react-dom"],
      })
    );
    return config;
  },
};
