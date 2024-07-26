const assert = require('assert');
const calculate = require('./1-calcul.js');
describe('calculate', function(){
    describe('SUM', function() {
        it('returns the sum of two rounded numbers', function() {
            assert.equal(calculate('SUM', 1.4, 1.6), 3);
        }); 
    });
    describe('SUBTRACT', function() {
        it('round the two numbers and subtract the second from the first', function(){
            assert.equal(calculate('SUBTRACT', 5.6, 3.1), 3);
        });
    });
    describe('DIVIDE', function() {
        it('rounds the numbers and retuns the first divided by the second', function() {
            assert.equal(calculate('DIVIDE', 6.0, 0), "Error");
            assert.equal(calculate('DIVIDE', 4.2, 2.1), 2);
        });
    });
    describe('invaluable', function() {
        it('not specified type', function() {
            assert.equal(calculate('MULTIPLY', 10.5, 2.0), "Not a suitable type");
        });
    });
});
