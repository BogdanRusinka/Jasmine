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
  
  it('change name',function(){
    man.changeName('Frederic');
    expect(man.name).toEqual('Frederic');
  });  

  it('grow',function(){
    man.grow();
    expect(man.age).toEqual(6);
    man.grow(2,3);
    expect(man.age).toEqual(8);
  });  

  it('throw error',function(){
    expect(man.changeName).toThrow(new Error('Name should be a string'));
    expect(man.grow.bind(man,"dfg")).toThrow();
    expect(man.grow.bind(man,true)).toThrow();
  }); 
    
  it('check changeName to be function and so on',function(){
    expect(man.changeName).toEqual(jasmine.any(Function));
    expect(man.name).toEqual(jasmine.any(String));
    expect(man.gender).toBeDefined();
  }); 

  it('spies for its own function with parameters',function(){
    spyOn(man, 'grow');
    man.grow(13);
    expect(man.grow).toHaveBeenCalledWith(13);
  }); 
});
