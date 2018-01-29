
// array

var arr=[1,2,3,4,5];

var mixed_arr = [1,true,3.14,"string",{name : "obj"},[1,2,3]];

console.log(typeof(arr));			// array is object type
console.log(typeof(mixed_arr));		//          "
console.log(mixed_arr[3]);			// print 3.14
console.log(mixed_arr.length);      // number of elements, in this case 6

console.log(arr); // before push
arr.push(6);
console.log(arr); // after push
arr.pop();
console.log(arr); // after pop
arr.shift();
console.log(arr); // after shift
arr.unshift(1);
console.log(arr); // after unshift
arr.reverse();
console.log(arr); // after reverse
arr.sort();
console.log(arr); // after sort

var str="1,2,3,4,5";
var arr1 = str.split(",");
console.log(arr1);