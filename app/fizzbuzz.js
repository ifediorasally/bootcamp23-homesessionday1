'use strict';

module.exports = {
    
fizzBuzz: function (i) {
  if (i% 15 === 0) {
  return 'FizzBuzz';
} if (i% 3 ===0){
  return 'Fizz';
}else if (i% 5 ===0){
  return 'Buzz';
}else {
  return i;
}
 }
} 
