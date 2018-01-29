
// object

var man = { 

	name   : "홍길동" , 
	age    : 20,
	height : 180

};

// 객체 속성 접근법 2가지
console.log(man.name);
console.log(man["age"]);

// 객체 속성 수정
man.name = "이몽룡";
man["age"] = 15;

console.log(man.name);
console.log(man["age"]);
