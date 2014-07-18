function Student(options){
	Man.prototype.constructor.call(this, options);
	this.school = 'MIT';
	this.semester = 1;
	this.getsPayment = true;
}

Student.prototype = new Man();

Student.prototype.takeExams = function(areResultsFine) {
	if (areResultsFine === true){
		this.semester++;
		this.getsPayment = true;
	} else if (areResultsFine === false){
		this.getsPayment = false;
	} else if (typeof areResultsFine !== 'boolean'){
		throw new Error('areResultsFine should be a boolean value');
	}
};