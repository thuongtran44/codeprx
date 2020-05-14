function Dog() {
	this.name = 'Dog';
	this.stomach = [];
}
Dog.prototype.eat= function(cat) {
	this.stomach = push(cat);
};
Dog.prototype.msayHi= function() {
	console.log('Hi, i am dog. My name is'+ Chalk.red(this.name));
}
module.exports = Dog;