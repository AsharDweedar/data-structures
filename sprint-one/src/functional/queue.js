var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[''+index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index !== 0){
      //debugger;
      //console.log(index , Object.keys(storage).length)
      var val = storage[''+ ( index - Object.keys(storage).length ) ]
      delete storage[''+( index - Object.keys(storage).length  )]
      
      
      return val ;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
