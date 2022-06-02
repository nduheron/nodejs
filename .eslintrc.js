module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "greenit"
    ],
    "rules": {
        "no-eval": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "greenit/s67": 2
    }
}
