const chai = require('chai');
const expect = chai.expect;
const calculate = require('./2-calcul_chai.js');
describe('calculate', function(){
    describe('SUM', function() {
        it('returns the sum of two rounded numbers', function() {
            expect(calculate('SUM', 1.4, 1.6)).to.equal(3);
        }); 
    });
    describe('SUBTRACT', function() {
        it('round the two numbers and subtract the second from the first', function(){
            expect(calculate('SUBTRACT', 5.6, 3.1)).to.equal(3);
        });
    });
    describe('DIVIDE', function() {
        it('rounds the numbers and retuns the first divided by the second', function() {
            expect(calculate('DIVIDE', 6.0, 0)).to.equal("Error");
            expect(calculate('DIVIDE', 4.2, 2.1)).to.equal(2);
        });
    });
    describe('invaluable', function() {
        it('not specified type', function() {
            expect(calculate('MULTIPLY', 10.5, 2.0)).to.equal("Not a suitable type");
        });
    });
});
