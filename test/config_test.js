const assert = require('assert');

describe('basic configuration', () => {
  const config = require('../index.js')(__dirname + '/config_example.json');

  it('should get json object from file', () => {
    assert.equal(config.port, 3000);
    assert.equal(config.directory, '/tmp/var');

    const redis = config.redis;
    assert.equal(redis.port, 6379);
    assert.equal(redis.host, '127.0.0.1');
    assert.equal(redis.family, 4);
    assert.equal(redis.db, 0);
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
});
