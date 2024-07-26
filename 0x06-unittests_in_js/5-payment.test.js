const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    this.beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
     });
     this.afterEach(function() {
        consoleSpy.restore();
     });
     it('should log "The total is: 120" and only call console.log once when called with 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
     });

     it('should log "The total is: 20" and only call console.log once when called with 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
     });
});
