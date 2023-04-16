module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/atoms": "./src/components/atoms",
            "@/molecules": "./src/components/molecules",
            "@/organisms": "./src/components/organisms",
            "@/screens": "./src/screens",
          },
        },
      ],
      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
    ],
  };
};
