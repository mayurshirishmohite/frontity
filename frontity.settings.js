const settings = {
  "name": "ct-website",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "colortokens-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://jsnation2020.frontity.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
