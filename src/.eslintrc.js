module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/prop-types": 0,
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-for": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "controlComponents": ["Field"],
    }],
  },
};