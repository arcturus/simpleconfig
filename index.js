function config(path) {
  const filePath = path || __dirname + '/config.json';
  const config = require(filePath);

  // Search for a prefix to overwrite variables.
  // That prefix is setup via the environment variable SIMPLECONFIG.
  // If prefix is set to MY_PREFIX_ will look for
  // all keys from the config file and try to overwrite
  // with MY_PREFIX_<key>
  const prefix = process.env['SIMPLECONFIG'] || '';
  Object.keys(config).map((key) => {
    return prefix + key.toUpperCase();
  }).forEach((key) => {
    if (process.env[key]) {
      config[key.substr(prefix.length).toLowerCase()] = process.env[key]
    }
  });

  return config;
}

module.exports = config;
