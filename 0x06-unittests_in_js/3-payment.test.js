const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with SUM and the given arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
});