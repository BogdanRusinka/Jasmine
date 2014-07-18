function Professor(options){
	Man.prototype.constructor.call(this, options);
	this.university = 'Texas Technical';
	this.scienceClubMember = true;
	this.salary = 5000;
	this.works = 12;
	this.interns = 1;
}

Professor.prototype = new Man();

Professor.prototype.extraEvents = function(extra){
	if(extra === true){
		this.scienceClubMember = false;
		this.salary = 0;
	} else if (typeof extra !== 'boolean'){
		throw new Error('extra should be a boolean value');
	}
}

Professor.prototype.studentsInterns = function(interns){
	if (typeof interns !== 'number'){
		throw new Error('interns should be a number');
	} else if (interns >= 0){
		this.salary += interns * 200;
		this.works += interns;
		this.interns += interns;
	} else if (interns < 0) {
		this.interns += interns;
		this.salary += interns * 200;
		if (this.interns < 0){
			throw new Error('interns number cannot be much than exist');
		}
	}
}
