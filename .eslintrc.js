module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "greenit"
    ],
    "rules": {
        "greenit/no-override-get-set": 2,
        "greenit/no-string-argument-settimeout-setinterval": 2,
        "greenit/no-full-sql-request": 2
  }
}
