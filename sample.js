let iife = (function () {
  var abc = 'text';
  // console.log(abc);
  return abc;
})();
iife; // does nothing
// console.log(iife);
// console.log(typeof iife);

// console.log(typeof function(){});
// function myFun() {}
// console.log(typeof myFun);


function fName() {
  return true;
}
console.log(fName.name);
