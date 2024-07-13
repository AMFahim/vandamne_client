module.exports = {
  plugins: [
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-organize-imports"),
  ],
  bracketSameLine: true,
  importOrder: ["^react/(.*)$", "^next/(.*)$", "^@(.*)/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  singleQuote: true,
  trailingComma: "all",
};
