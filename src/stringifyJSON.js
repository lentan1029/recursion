// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var res = "";
  if(typeof obj == "object" && !Array.isArray(obj) && obj != null){
    res = res + "{";
    for(var key in obj){
        if(typeof obj[key] == "function" || typeof obj[key] == "symbol" || obj[key] === undefined){
          //do nothing
        } else {
          res = res + stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
        }
    }
    res = res == "{" ? "{}" : res.slice(0,-1) + "}";
    return res;

  } else if (typeof obj == "string"){
    return '"' + String(obj) + '"';
  } else if (Array.isArray(obj)){
    res = res + "[";
    for(var i = 0; i < obj.length; i++){
      if(typeof obj[i] == "function" || typeof obj[i] == "symbol" || obj[i] === undefined){
        res = res + "null" + ",";
      } else {
        res = res + stringifyJSON(obj[i]) + ","
      }
    }
    res = res == "[" ? "[]" : res.slice(0,-1) + "]";
    return res;
  } else if (obj === null){
    return 'null';
  } else if (typeof obj == "function" || typeof obj == "symbol"){
    return undefined;
  } else {
    return String(obj);
  }

};
