
// another string func

var str = "asdasdasd"; // 9 length

// .charAt() => find attribute of string
// or use like this a[0], a[a.8]

console.log(str.charAt(0)); // a
console.log(str.charAt(8)); // d
console.log(str.charAt(9)); // notthing

console.log(str[0]); // a
console.log(str[8]); // d
console.log(str[9]); // undefined

// str.charAt(9) != str[9]


// get part of string
// substring(start,destination)
// substr(start,destination from start)
console.log(str.substring(2,4)); // da
console.log(str.substr(2,4)); 	 // dasd
console.log(str.substring(4)); 	 // asdasd (from 4 ~ last attribute)
console.log(str.substr(4)); 	 // asdasd (from 4 ~ last attribute)

// find pattern in string
// .indexOf("words") => first met pattern in string
// .lastIndexOf("words") = > last met pattern in string
// if error, return -1
console.log(str.indexOf("sd"));     // 1
console.log(str.lastIndexOf("sd")); // 8
console.log(str.indexOf("f"));      // -1

