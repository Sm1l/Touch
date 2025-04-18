import { propertyOrdering, selectorOrdering } from "stylelint-semantic-groups";

const stylelintConfig = {
  ignoreFiles: ["dist/**/*", "public/**/*"],
  extends: ["stylelint-config-recommended-scss"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "rule-empty-line-before": ["always", { except: ["first-nested", "after-single-line-comment"] }],
    "no-descending-specificity": null,
    "block-no-empty": null,
    "comment-empty-line-before": "always",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "declaration-block-single-line-max-declarations": 0,
    "selector-type-case": "lower",
    "function-url-quotes": "always",
    "color-hex-length": "long",
    "selector-class-pattern": ["^[a-z][a-zA-Z0-9]+$", { severity: "warning" }],

    "order/order": selectorOrdering,
    "order/properties-order": propertyOrdering,
  },
};

export default stylelintConfig;
