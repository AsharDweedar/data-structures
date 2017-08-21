var Stack = function() {
  var instance = {
  	coll:{}
  };
  
  _.extend(instance,methods);
  
  return instance;
};


var push = function(val){
	
  	this.coll[ '' + Object.keys(this.coll).length ] = val;
  	return  this.coll[ '' + Object.keys(this.coll).length ] ;
  }

var pop = function(){
	
	if (Object.keys(this.coll).length !== 0){
		var variable = this.coll['' + Object.keys(this.coll).length - 1]
		delete  this.coll['' + Object.keys(this.coll).length - 1];
		return variable ;
	}
}

var size = function(){
	
	return Object.keys(this.coll).length ;
}

   var methods = {};
  methods.push = push;
  methods.pop = pop;
  methods.size = size;
  

