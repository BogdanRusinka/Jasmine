describe('Man should', function() {
  var man;
  var student;

  beforeEach(function() {
    man = new Man();
  });

  it('have name, age, gender properties', function(){
    expect(man.hasOwnProperty('name')).toBe(true);
    expect(man.hasOwnProperty('age')).toBe(true);
    expect(man.hasOwnProperty('gender')).toBe(true);
  });

  it('default to name Vasiliy', function(){
    expect(man.name).toEqual('Vasiliy');
  });

  it('take custom name', function(){
    var customMan = new Man({
      name: 'Sanya'
    });
    expect(customMan.name).toEqual('Sanya');
  });
  
  it('take custom name', function(){
    var customMan = new Man({
      name: 'Sanya'
    });
    expect(customMan.name).toEqual('Sanya');
  });

  /***
    more tests should be added
  **/

});
