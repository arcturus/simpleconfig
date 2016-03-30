yajsonfig  [![Build Status](https://travis-ci.org/arcturus/yajsonfig.svg?branch=master)](https://travis-ci.org/arcturus/yajsonfig) [![Coverage Status](https://coveralls.io/repos/github/arcturus/yajsonfig/badge.svg?branch=master)](https://coveralls.io/github/arcturus/yajsonfig?branch=master)

==========

Jet Another simple json configuration package for your projects.

Usage
-----
```javascript
const config = require('yajsonfig')(__dirname + '/config.json');

console.log('My configuration is ', config);
```

Extras
------
Not many.

You can overwrite the values of the json file based on environment variables.

For example, given the following json file:
```json
{
  "port": 3000,
  "directory": "/tmp/var"
}
```

Setup the environment variable ``SIMPLECONFIG`` to a prefix of your choice:

```bash
export SIMPLECONFIG='MY_PROJECT_'
```

And then setup as many variables as you want:

```bash
export MY_PROJECT_directory=/tmp/another
```

Your config object will come like:

```json
{
  "port": 3000,
  "directory": "/tmp/another"
}
```
