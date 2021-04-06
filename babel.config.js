module.exports = function (api) {
  api.cache(true);

  return {
    env: {
      development: {
        presets: ["next/babel"],
      },
      production: {
        presets: ["next/babel"],
      },
      test: {
        presets: [
          ["next/babel", { "preset-env": { modules: "commonjs" } }],
          "@babel/preset-typescript",
        ],
      },
    },
  };
};
