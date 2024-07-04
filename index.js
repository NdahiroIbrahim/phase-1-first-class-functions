const receivesAFunction = function(callback){
    callback();
}
function returnsANamedFunction() {
    return function receivesAFunction(name) {
      console.log(name);
    };
  }

function returnsAnAnonymousFunction() {
  return function (titans) {
    console.log(titans);
  };
}
