const lintStagedConfig = {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": [
    "prettier --write",
    "eslint --fix --max-warnings=0",
  ],
  "*.{json,jsonc,css,md,mdx,yml,yaml}": "prettier --write",
};

export default lintStagedConfig;
