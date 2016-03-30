const assert = require('assert');

describe('basic configuration', () => {
  const config = require('../index.js')(__dirname + '/config_example.json');
  const mockrequire = require('mock-require');

  before(() => {
    const defaultConfigFile = process.cwd() + '/config.json';
    mockrequire(defaultConfigFile, {
      port: 9999,
      directory: '/tmp/default'
    });
  });

  after(() => {
    mockrequire.stopAll();
  });

  it('should get json object from file', () => {
    assert.equal(config.port, 3000);
    assert.equal(config.directory, '/tmp/var');

    const redis = config.redis;
    assert.equal(redis.port, 6379);
    assert.equal(redis.host, '127.0.0.1');
    assert.equal(redis.family, 4);
    assert.equal(redis.db, 0);
  });

  it('should fallback to config.json if not file specified', () => {
    const defaultConfig = require('../index.js')();
    assert.equal(defaultConfig.port, 9999);
    assert.equal(defaultConfig.directory, '/tmp/default');
  });
});

describe('configuration overwrite', () => {
  before(() => {
    process.env['SIMPLECONFIG'] = 'MY_TEST_';
    process.env['MY_TEST_PORT'] = 1000;
  });
  after(() => {
    delete(process.env['SIMPLECONFIG']);
    delete(process.env['MY_TEST_PORT']);
  });

  it('should overwrite values from environment variables', () => {
    const config = require('../index.js')(__dirname + '/config_example.json');
    assert.equal(config.port, 1000);
  });

  it('should overwrite if no prefix setup', () => {
    delete(process.env['SIMPLECONFIG']);
    delete(process.env['MY_TEST_PORT']);
    process.env['PORT'] = 6666;
    const config = require('../index.js')(__dirname + '/config_example.json');
    assert.equal(config.port, 6666);
  });
});
