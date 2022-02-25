let assert = chai.assert;
describe('TestoviParser', function () {

    describe('porediRezultate', function () {

        it('Prolaze svi testovi', function () {

            var test1=testovi[5];
            var test2=testovi[6];
            var test = TestoviParser.porediRezultate(test1, test2);
            assert.equal(JSON.stringify(test), JSON.stringify({ "promjena": "100%", "greske": [] }))
        });

    });
});