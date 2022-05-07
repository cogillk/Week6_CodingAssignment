var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#cardValue', function () {
        it('should return the numerical card value', function () {
            var x = Deck.cardValue('Jack');
            expect(x).to.equal('11');
        });

        it('should return the same value that is passed in', function(){
            var y = Deck.cardValue('7');
            expect(y).to.equal('7');
        })
    });
});



