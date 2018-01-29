
var obj = {
	name : "object",
	weight : 30,
	bool : true,
	arr : [1,2,3],
	obj : {property : 1}
};

// using 'for' func

var property_list = Object.keys(obj);

for( var i=0 ; i<property_list.length ; i++ ){
    var propertyName = property_list[i];
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// using 'for in' func

for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}