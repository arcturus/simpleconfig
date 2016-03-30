simpleconfig
============

Return a json file with the configuration needed by your project.

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
