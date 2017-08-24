var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage.push(item);

};

setPrototype.contains = function(item) {
	if ( this.search(item) !== -1 ) {
		return true;
	}
	return false;
};

setPrototype.remove = function(item) {
	this._storage.splice(this.search(item), 1);
};

setPrototype.search = function(item) {
	for (var i = 0; i < this._storage.length; i++) {
		if (this._storage[i] === item) {
			return i;
		}
	}
	return -1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
