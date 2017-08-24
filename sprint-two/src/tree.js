var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.addChild = treeMethods.addChild ;
  newTree.contains = treeMethods.contains ;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value);
	this.children.push(child);	
};

treeMethods.contains = function(target) {
	var search = function(node){
	   if (node.value === target) {
	   		return true;
	   }
	   for (var i = 0; i < node.children.length; i++) {
		   	if (search (node.children[i]) ){
		   		return true;
		   	}
	   }
	   return false;

	}                                                                                                
	if(this.value === target){
		return true ;
	} else {
		for (var i = 0; i < this.children.length; i++) {
		   	if (search (this.children[i]) ){
		   		return true;
		   	}
	   }
	   return false
	}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */



