module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {
    "vue/no-v-for-template-key": "off",
    "vue/no-mutating-props": "off",
    "vue/no-unused-vars": "off",
    "no-empty": "off",
    "no-unused-vars": "off"
  }
}
