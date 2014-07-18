describe('Student should', function() {
  var man;
  var student;

  beforeEach(function() {
    man = new Student();
    spyOn(man, 'getSchoolName').and.callFake(function() {
      return "Other";
    });
  });
  

  it('inherit properties from Man', function(){
    expect(man.hasOwnProperty('name')).toBe(true);
    expect(man.hasOwnProperty('age')).toBe(true);
    expect(man.hasOwnProperty('gender')).toBe(true);
  });

  it('go to next semester and get payment', function(){
     man.takeExams(true);
     expect(man.semester).toEqual(2);
     expect(man.getsPayment).toBe(true);
  });

  it('throw error', function(){
     expect(man.takeExams.bind(man,2)).toThrow();
  });

   it('define school', function(){
      var lastSchoolName;
      var schoolName = man.getSchoolName();
      expect(schoolName).toBeDefined();
      expect(lastSchoolName).not.toBeDefined();
      expect(lastSchoolName).toBeUndefined();
  });

   it("tracks that the spy was called", function(){
      spyOn(man, 'grow');
      man.grow();
      expect(man.grow).toHaveBeenCalled();
   });

   it("tracks for fake", function(){
      var student = man.getSchoolName();
      expect(student).toEqual('Other');
   });

});
