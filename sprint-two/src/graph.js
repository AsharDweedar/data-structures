

// Instantiate a new graph
var Graph = function() {
	this.nodes = [];
	//this.value = null;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	console.log(node)
	this.nodes.push(Node(node));
};

Graph.prototype.search = function (node) {
	for (var i = this.nodes.length - 1; i >= 0; i--) {
		if (this.nodes[i].value === node ) {
			return i ;
		}
	}
	return -1 ;
}


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if (this.search(node) !== -1){
		return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var index = this.search(node);
	if (index !== -1) {
		this.nodes.splice(index , 1)
	}
	return node;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


