const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with the correct object when sucess is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({data: 'Successful response from the API' });
                done();
            })
            .catch((error) => done(error));
    });
    it('should not return anything when success is false', function(done) {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                expect(response).to.be.undefined;
                done();
            })
            .catch((err) => done(err));
            
    });
});