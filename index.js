function fun1Load() {
	console.log("function 1 load");
}
function fun2Load() {
	console.log("function 2 load");
}

function fun3Load() {
	setTimeout(() => {
		console.log("function 3 load");
	}, 2000);
}

function fun4Load() {
	console.log("function 4 load");
}

fun1Load();
fun2Load();
fun3Load();
fun4Load();
