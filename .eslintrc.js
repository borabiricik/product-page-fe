module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next", "plugin:storybook/recommended"],
  rules: {
    "unused-imports/no-unused-imports-ts": 2,
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "warn",
    "no-useless-escape": "off",
    "no-empty-pattern": "off",
    "no-irregular-whitespace": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-empty": "off",
    "no-var": "off",
    "no-constant-condition": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": ["warn", {
      additionalHooks: "(useFetchHandler)"
    }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off"
  }
};