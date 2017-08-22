var Queue = function() {
  var instsnce = Object.create(queueMethods);
  instsnce.storage = {};
  index = 0;
  return instsnce;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[index] = value ;
	index++ ;
} 

queueMethods.dequeue = function(){
	if (size !== 0) {
		var val = this.storage['' + Object.keys(this.storage)[0]];
		delete this.storage['' + Object.keys(this.storage)[0]];
		
	}
    return val;

} 

queueMethods.size = function(){
	return Object.keys(this.storage).length;

} 
