// function capitalize(str) {
// 	var tokens= str.split("");
// 	tokens[0]= tokens[0].toUpperCase();
//   	for (var i = 0; i < tokens.length; i++) {
//   		if (tokens[i] === " ") {
//   			tokens[i+1]= tokens[i+1].toUpperCase();
//   		}
//   	}
//   	console.log(tokens);
//   	return tokens.join("");
// }
//  console.log(capitalize("hi, i am a student"));


// function findMaxDiff(arr) {
// 	/*
//   	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
//     - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó và chính 2 phần tử đó.
//     - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
//   */
// var diff= []; //mang chua gia tri tao max
// var diffMax= Math.abs(arr[1]-arr[0]);
// diff.push(arr[0]);
// diff.push(arr[1]);
//  if(arr.length === 0 || arr.length=== 1)
//  	return 0;
//  else {
//  	for(var i= 0; i < arr.length-1; i++) {
//   	//diff.push(Math.abs(arr[i+1] - arr[i]));
//   	temp= Math.abs(arr[i+1] - arr[i]);
//   	if (temp > diffMax) {
//   		diffMax= temp;
//   		diff.push(arr[i]);
//   		diff.push(arr[i+1]);
//   	}
//   }
//  } 
 
//  return [diff[diff.length-2], diff[diff.length-1], diffMax];
// }

// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));


// function equal_pt(str){ 
//  var timesOfT= 0;
//  var timesOfP = 0;
//  var tokens= str.split("");
//  if(str.length === 0) return ('empty string');
//  else {
//  	for(var token of tokens) {
//     if(token === 't') timesOfT++;
//     if(token === 'p') timesOfP++;
//    }
//    return timesOfT === timesOfP;
//  }
// }
// equal_pt("");



// function toNextChar(str) {
// 	// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
//   // Tham số:
//   // - String: chuỗi nhập vào ban đầu.
//   var tokens= str.split("");
//   var arr= tokens.map(function(x) {
//   	return String.fromCharCode(x.charCodeAt(0)+1);
//   });
//   return arr.join("");
// }
// console.log(toNextChar("Hello"));



// function maxOfSumChain(arr,k){
// 	arr = arr.sort(function(a, b) {
//   	return b - a;
//   })
//   var sum= 0;
//   for(var i= 0; i< k; i++) {
//   	sum+= arr[i];
//   }
//   return sum;
// }
// console.log(maxOfSumChain([1,3,2,6,2],3))




// function findMostFrequent(arr) {
// // Viêt hàm tại đây!
// 	arr= arr.sort(function(a, b) {
//   	return a-b;
//   })
//   var temp= arr[0];
//   var count= 1;
//   var maxFr= 1;
//   var result= [];
//   for(var i= 1; i < arr.length; i++) {
//   	if(arr[i] === temp) {
//     	count++;
//     } else {
//     temp= arr[i];

//     	if(count > maxFr) {
//       	result= [];
//       	result.push(arr[i-1]);
//         maxFr= count;
//       } else if(count === maxFr) {
//       	result.push(arr[i-1]);
//       }
//       count= 1;
//     }
//   }
//   return result;
// }
// console.log(findMostFrequent([1,2,3,4,1,2,2]));




function isIncludes(str1, str2) {
	var tokens= str1.split("");
  var count = 0;
  for(var t of tokens) {
  	++count;
  }
  return count===str1.length;
}
function rearrangeChar(str1, str2) {
// Viết hàm tại đây!

  return str1.length === str2.length && isIncludes(str1, str2)
		
}
console.log(rearrangeChar('afaw','afaw'))