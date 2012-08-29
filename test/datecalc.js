
var datecalc = require('..');

describe('datecalc.daysInMonth(year, month)', function(){
  it('should calculate days in given month', function(){
    datecalc.daysInMonth(2012,1).should.equal(29);
    datecalc.daysInMonth(2011,1).should.equal(28);
    datecalc.daysInMonth(2012,11).should.equal(31);
  })
})

describe('datecalc.age(fromDt, toDt)', function(){
  it('should throw error if args not Date objects', function(){
    (function() {datecalc.age(25, new Date(2012,7,11))}).should.throw();
    (function() {datecalc.age(new Date(2010,0,01), "25/6/2012")}).should.throw();
  })
})
describe('datecalc.age(fromDt, toDt)', function(){
  it('should throw error if toDt not after fromDt', function(){
    (function() {datecalc.age(new Date(2012,8,1), new Date(2012,7,11))}).should.throw();
  })
})

describe('datecalc.age(fromDt, toDt)', function(){
  it('should calculate days between 2 dates', function(){
    datecalc.age(new Date(2012,7,01), new Date(2012,7,11))
    	.should.include({years: 0, months: 0, days: 10});
    datecalc.age(new Date(2010,0,01), new Date(2012,2,31))
    	.should.include({years: 2, months: 2, days: 30});
    datecalc.age(new Date(2010,5,20), new Date(2011,1,5))
      .should.include({years: 0, months: 7, days: 16});
    datecalc.age(new Date(2000,11,30), new Date(2012,0,5))
    	.should.include({years: 11, months: 0, days: 6});
  })
})

