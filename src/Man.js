function Man(options){
	options = options || {};
	this.name = options.name || 'Vasiliy';
	this.age = options.age || 5;
	this.gender = options.age || 'Male';
}

Man.prototype.changeName = function(name) {
	if (typeof name === 'string'){
		this.name = name;
	} else {
		throw new Error('Name should be a string');
	}
};

Man.prototype.grow = function(years) {
	if (typeof years === 'undefined'){
		this.age++;
	} else if (typeof years === 'number'){
		this.age += years;
	} else {
		throw new Error('Years should be a number');
	}
};