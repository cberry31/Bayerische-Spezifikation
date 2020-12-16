describe('Find',
    function () {
        it('findCar(e30)',
            function () {
                chai.expect(findCar('e21')).to.deep.equal([e211975]);
            });
        it('findYear',
            function () {
                chai.expect(findYear(1975)).to.deep.equal([e211975]);
            });
        it('findBodyStyle',
            function () {
                chai.expect(findBodyStyle("2 door")).to.deep.equal([e211975, e241986, e301983, e311990, e361998]);
            });
    });

describe('Prints',
    function () {
        it('printName(e211975)',
            function () {
                chai.expect(printName(e211975)).to.equal('E21');
            })
    })