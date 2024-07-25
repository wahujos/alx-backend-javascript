// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should add whole positive numbers correctly', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and add positive whole and decimal number correctly', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and add decimal numbers correctly', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
