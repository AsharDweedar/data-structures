var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instant = {
  	coll : {} ,
  	index : 0 ,
  }
  _.extend(instant, queueMethods);
  return instant ;


};


var enqueue = function(value){

	this.coll['' + this.index] = value ;
	this.index++ ;

}
var dequeue = function(){
	if (this.size !== 0 ){
		var v = this.coll['' + this.index - this.size() ] ;
		delete this.coll['' + this.index - this.size() ] ;
		return v ;
	}

}
var size = function(){
	return Object.keys(this.coll).length ;

}

var queueMethods = {};
queueMethods.enqueue = enqueue;
queueMethods.dequeue = dequeue;
queueMethods.size = size;
/*
var  q1=Queue();
q1.enqueue('h1');
q1.enqueue('h2');
q1.enqueue('h3');
q1.dequeue();		*/