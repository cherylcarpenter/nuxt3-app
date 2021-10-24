module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  customSyntax: "postcss-scss",

  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "no-empty-source": null,
    "selector-class-pattern": null,
    "number-max-precision": 6,
  },
};
