var Queue = function() {
	this.index = 0;
	this.storage = {};
};


Queue.prototype.enqueue = function(value){
    this.storage['' + this.index ] = value;
    this.index++;
    console.log('push' ,this.storage , this.index , this.size() , Object.keys(this.storage) );

}

Queue.prototype.dequeue = function() {
		if(this.size()	 !== 0){
			var val = this.storage['' + this.index  - this.size() ];
			delete this.storage['' + this.index - this.size ()];
			console.log('pop' ,this.storage , this.index , this.size())
			return val;
		}
}

Queue.prototype.size = function(){
	return Object.keys(this.storage).length ;
}
