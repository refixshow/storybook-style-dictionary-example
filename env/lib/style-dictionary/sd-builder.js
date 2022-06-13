const StyleDictionary = require("style-dictionary").extend({
  source: ["env/lib/style-dictionary/tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "src/styles/",
      files: [
        {
          destination: "_style_dictionary.scss",
          format: "scss/variables",
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
