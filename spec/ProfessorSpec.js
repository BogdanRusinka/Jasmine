describe('Professor should', function() {
  var man;
  var student;

  beforeEach(function() {
    man = new Professor();
  });

  it('inherit properties from Man', function(){
    expect(man.hasOwnProperty('name')).toBe(true);
    expect(man.hasOwnProperty('age')).toBe(true);
    expect(man.hasOwnProperty('gender')).toBe(true);
  });

  it('not be in a club and get salary', function(){
    man.extraEvents(true);
    expect(man.scienceClubMember).toBe(false);
    expect(man.salary).toEqual(0);
  });

  it('has a salary and be club member', function(){
    man.extraEvents(false);
    expect(man.scienceClubMember).toBe(true);
    expect(man.salary).toEqual(5000);
  });

  it('has interns and get higher salary', function(){
    man.studentsInterns(2);
    expect(man.works).toEqual(14);
    expect(man.salary).toBeGreaterThan(5000);
    expect(man.interns).toEqual(3);
  });

  it('has less interns and get less salary', function(){
    man.studentsInterns(-1);
    expect(man.works).toEqual(12);
    expect(man.salary).toBeLessThan(5000);
    expect(man.interns).toEqual(0);
  });

  it('throw error', function(){
     expect(man.studentsInterns.bind(man,-2)).toThrow();
     expect(man.studentsInterns.bind(man,[2,1])).toThrow();
     expect(man.extraEvents.bind(man,123)).toThrow();
     expect(man.extraEvents.bind(man,"123")).toThrow();
     expect(man.extraEvents.bind(man,false)).not.toThrow();
  });

  it('be older', function(){
    man.grow(45);
    expect(man.age).not.toEqual(45);
    expect(man.age).toMatch(/[0-9]/);
  });

  it('set own name', function(){
  	var professor = new Professor({ name : "Nikita" });
  	 expect(professor.name).toEqual("Nikita");
  });


});