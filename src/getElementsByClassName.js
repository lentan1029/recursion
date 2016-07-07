// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var res = [];
  var start = document.body;

  function filter(node){
    if(node.classList != undefined){
      for(var i = 0; i < node.classList.length; i++){
        if(node.classList[i] == className){
          res.push(node);
        }
      }
    }
    for(var j = 0; j < node.childNodes.length; j++){
      filter(node.childNodes[j]);
    }
  }

  filter(start);

  return res;
};
