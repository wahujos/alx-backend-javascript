// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should add whole positive numbers correctly', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should round and add positive whole and decimal number correctly', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should round and add decimal numbers correctly', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should round and add 1.5 and 3.7', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should and and round a zero and a decimal number', function() {
    assert.equal(calculateNumber(0, 2.7), 3);
  })
  it('should round the second number correctly and give the sum', function() {
    assert.equal(calculateNumber(3, 4.6), 8);
  })
});
