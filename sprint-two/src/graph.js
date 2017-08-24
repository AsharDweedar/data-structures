

// Instantiate a new graph
var Graph = function() {
	this.nodes = [];
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes.push(Node(node));
};

Graph.prototype.search = function (arr , node) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i].value === node ) {
			return i ;
		}
	}
	return -1 ;
}


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if (this.search(this.nodes , node) !== -1){
		return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var index = this.search(this.nodes , node);        //index of node inside the graph
	if (index !== -1) {
		var edgesOfNode = this.nodes[index].edges ;  // edges of the node we want to delete
;		for (var i = 0; i < edgesOfNode.length; i++) {
			var distination = edgesOfNode[i].edges ;  // array of edges inside a node in the graph array , the array contains a connection 'edge' to the node we want to delete ;
			distination.splice(this.search(distination , node ) , 1);
		}
		this.nodes.splice(index , 1);
	}
	return node;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

	var arrEdges =  this.nodes[this.search(this.nodes ,fromNode)].edges  ;
	for (var i = 0; i < arrEdges.length; i++) {
		if (arrEdges[i].value === toNode) {
			return true;
		}
	}
	return false;
	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	//this.nodes[this.search(fromNode)].edges.push(this.nodes[this.search(toNode)]);
	var fromEdges = this.nodes[this.search(this.nodes , fromNode)].edges;  //fromObject.Edges
	var toEdges = this.nodes[this.search(this.nodes , toNode)].edges;      //toObject.Edges
	var toObj = this.nodes[this.search(this.nodes , toNode)];     // {the to object}
	var fromObj = this.nodes[this.search(this.nodes , fromNode)]; // {the from object}
	fromEdges.push(toObj);
	toEdges.push(fromObj);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var fromEdges = this.nodes[this.search(this.nodes, fromNode)].edges;  //edges of 'from'
	fromEdges.splice(this.search(fromEdges , toNode));                         //splicing from : 'from'.edges
	var toEdges = this.nodes[this.search(this.nodes, toNode)].edges;      //edges of 'to'
	toEdges.splice(this.search(toEdges , fromNode));                           //splicing from : 'to'.edges
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var graph = this.nodes;
	for (var i = 0; i < graph.length; i++) {
		cb(graph[i].value);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


