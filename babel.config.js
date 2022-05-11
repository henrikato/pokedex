module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["."],
          "extension": [".ts", ".tsx", ".android.ts", ".android.tsx", ".ios.ts", ".ios.tsx"],
          "alias": {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens"
          }
        }
      ]
    ]
  };
};
