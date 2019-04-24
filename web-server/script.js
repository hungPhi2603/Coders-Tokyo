var count = 0;
var counter = document.getElementById('count');
counter.innerHTML = count;
function plusOne() {
	count++;
	counter.innerHTML = count;
	//console.log(count);
}


var input= document.getElementById('searchBox');
function clearInp() {
	input.value= "";
}
function sayHi() {
	alert("Hi "+ input.value);
}


var btn= document.getElementById('clearButton');
// var form= ;
btn.addEventListener('click', function() {
	document.getElementById('loginForm').reset();
})



var storageKey= 'contact';
var dataString= localStorage.getItem(storageKey);
var users; 
if (dataString) {
	users= JSON.parse(dataString);
} else {
	users= [];
}
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');
var addInput = document.getElementById('addInput');
var addBtn= document.getElementById('add-btn');

function render(users) {
	var content = users.map(function(user) {
  	return '<li>' + user.name + ' - ' + user.phone + '</li>';
  });
  userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
	// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý: 
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
	var value = searchInput.value;
  console.log(value);
  var result= users.filter(function(item) {
  	return item.name.includes(value)|| item.phone.includes(value);
  })
  render(result);
});

addBtn.addEventListener('click', addContact);

function addContact() {
	var newC= {
		name: addInput.value,
		phone: 1111
	}
	users.push(newC);
	
	render(users);
	localStorage.setItem(storageKey, JSON.stringify(users));
}



// axios.get('https://randomuser.me/api/')
// .then(function(res) {
// 	// console.log(typeof(res.data.results[0]))
// 	// console.log(res.data.results[0])
// 	// document.write(res.data.results[0].gender)
// 	// console.log(typeof(res));
// 	// var dat= JSON.parse(res);
// 	// console.log(dat);
// 	document.write(JSON.stringify(res))
// })


fetch('https://randomuser.me/api/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });