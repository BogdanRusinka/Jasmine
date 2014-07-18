describe('Student should', function() {
  var man;
  var student;

  beforeEach(function() {
    man = new Student();
  });

  it('inherit properties from Man', function(){
    expect(man.hasOwnProperty('name')).toBe(true);
    expect(man.hasOwnProperty('age')).toBe(true);
    expect(man.hasOwnProperty('gender')).toBe(true);
  });

  /***
    more tests should be added
  **/


});
