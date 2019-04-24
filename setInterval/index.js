function countDown(x) {
	return new Promise(function(resolve, reject) {
		var inID= setInterval(function(data) {
			console.log(x);
			x--;
			if (x=== -1) {
				clearInterval(inID);
				resolve(data)
			}
		}, 1000)
	})
}

function sayHPNY() {
	console.log('Happy new year');
}

countDown(5).then(sayHPNY);