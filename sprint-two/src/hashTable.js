

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
	
	function limitChanger (){
			if ( (counter/this._limit) > 0.75 ){
			console.log('double 2' , counter/this._limit , counter , this._limit , v) ////////
			this._limit *= 2;
			} else if ( (counter/this._limit) < 0.25){
				console.log('half ' , counter/this._limit , counter , this._limit , v) /////////
				this._limit /= 2;
			}}

	var counter = 0;
	this._storage.each(function(ele,ind){
			if (ele === undefined){
				counter++;
			} }); // for counting how many undefined elements we have 
	limitChanger();


	var index = getIndexBelowMaxForKey(k, this._limit); 

	if (this._storage.get(index) === undefined  ) {
		this._storage.set(index, [[k , v]]);
	} else {
		var notFound = true;
		var bucket = this._storage.get(index);
		bucket.forEach(function(tuble,ind){
			if (tuble[0] === k){
				tuble[1] = v;
				notFound = false;
			}
		})
		if (notFound) {
			bucket.push([ k , v]);
			this._storage.set(index , bucket);
		}

	}
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index , k);
  var v ;
  bucket.forEach(function(tuble,ind){
			if (tuble[0] === k){
				v = tuble[1];
			}
		})
  return v ;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index , k);
  var v ;
  bucket.forEach(function(tuble,ind,bucket){
			if (tuble[0] === k){
				v = tuble[1];
				bucket.splice(ind , 1);
			}
		})
  return v ;
};



