var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = addToTail;
  list.removeHead = removeHead; 
  list.contains = contains;

  return list;
  };

  var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var addToTail = function(value) {
    var newNode  = Node (value);
    newNode.next = null; 
    if(this.tail !== null){
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
  };


 var removeHead = function() {
    if (this.head === null){
      return null;
    }
    var ToDeleteFFF = this.head;
    //this.head.next = null;
    this.head = ToDeleteFFF.next;

    return ToDeleteFFF.value;
  };

 var contains = function(target) {
    if (this.head === null){
      return false;
    }  
    var search = function(n){
      //console.log('inside the search ')
      if (n.next === null){
        return false;
      } 

      if (n.next.value !== target){
        return search(n.next);
      } else {
  
        return true ;
      }
    }
    if (this.head.value == target){
      return true ;
    } 
    return search(this.head);
  };
/*
 * Complexity: What is the time complexity of the above functions?
 */
