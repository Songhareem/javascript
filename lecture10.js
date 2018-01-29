
// define function

function return_test(){

	console.log("실행되는 코드");
	return;
	console.log("실행되지 않는 코드");
}


function print(msg){

	console.log(msg);
}

function sum(var1,var2){

	return var1 + var2;
}

return_test();

print(sum(1,2));