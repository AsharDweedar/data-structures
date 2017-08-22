var Stack = function() {
	var instance = Object.create(stackMethods);
	instance.storage = {} ;
	size = 0;
	
	return instance ;
};

var stackMethods = {} ;

stackMethods.push = function(val){
	this.storage['' + size] = val;
	size++;
}

stackMethods.pop = function(){
	if(size !== 0 ) {
		var val = this.storage['' + size - 1];
		delete this.storage['' + size - 1];
		size--;
		return val;
	}
}
stackMethods.size = function(){
	return size ;
}



/*
var stackMethods = Object.create(Stack , {

	push  :  function(val){
								this.storage['' + this.size] = val;
							},
	pop  :  function(){
							if(this.size) {
								var val = this.storage['' + this.size - 1];
								delete this.storage['' + this.size - 1];
								return val ;
							}
						},
	size  : function(){
							return Object.keys(this.storage).length ;
						}

});
*/
