# simple-rawbody

[![NPM version](https://badge.fury.io/js/simple-rawbody.svg)](http://badge.fury.io/js/simple-rawbody)
[![Build Status](https://travis-ci.org/cosmosgenius/simple-rawbody.svg?branch=master)](https://travis-ci.org/cosmosgenius/simple-rawbody)

Gets the whole content in the request as a property rawbody with UTF-8 encodinng

## API

```js
var rawBody = require('simple-rawbody')
var typer      = require('media-typer')

app.use(rawBody());
app.use(function(req, res, next){
  var body = req.rawBody
});
```