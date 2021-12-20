module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "airbnb"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off"
    }
};
