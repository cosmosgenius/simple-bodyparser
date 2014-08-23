# simple-bodyparser

[![NPM version](https://badge.fury.io/js/simple-bodyparser.svg)](http://badge.fury.io/js/simple-bodyparser)
[![Build Status](https://travis-ci.org/cosmosgenius/simple-bodyparser.svg?branch=master)](https://travis-ci.org/cosmosgenius/simple-bodyparser)

Gets the whole content in the request as a property body with UTF-8 encodinng

## API

```js
var bodyparser = require('simple-bodyparser');
var app = require('express')();

app.use(bodyparser());
app.use(function(req, res, next){
  var body = req.body
});
```