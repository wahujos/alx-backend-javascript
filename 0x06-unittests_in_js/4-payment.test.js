const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', function() {
    let calculateNumberStub;
    let consoleSpy;

    this.beforeEach(function() {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    this.afterEach(function() {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM and the given arguments', function() {
        // const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    });
});