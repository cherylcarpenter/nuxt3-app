const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("../tailwind.config");
const atImport = require("postcss-import");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.story.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
          postcssOptions: {
            plugins: {
              "postcss-import": {},
              tailwindcss,
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    },
  ],
  webpackFinal(config, options) {
    config.resolve.modules = [
      path.resolve(__dirname, "..", "components"),
      "node_modules",
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.dirname(path.resolve(__dirname)),
    };
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        "style-loader",
        "css-loader",
        "sass-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    plugins: {
                      "postcss-import": {},
                      tailwindcss,
                      "postcss-extend": {},
                      "postcss-nested": {},
                      autoprefixer: {},
                    },
                  },
                ],
              ],
            },
          },
        },
      ],

      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
