// var pfs= require('promise-fs');

// function onDone(text) {
// 	console.log(text);
// }

// function onError(err) {
// 	console.log(err);
// }

// function read(path) {
// 	return pfs.readFile(path, {encoding: 'utf8'})
// }

// read('text1.txt')
// .then(onDone)
// .then(function() {
// 	return read('text2.txt')
// })
// .then(onDone)
// .catch(onError);

var fs= require('fs');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}	
		})
	})
};
readFilePromise('./text1.txt');
.then(function(text) {
	console.log(text);
})
.then(function(path) {
	return readFilePromise('text2.txt');
})
.then(function(text) {
	console.log(text)
})
.catch(function(err) {
	console.log(err);
})