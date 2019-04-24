var listOfSport= document.getElementById('sport-list');
var btnAdd= document.getElementById('btn-add');
var inpId= document.getElementById('id');
var inpName= document.getElementById('name');

btnAdd.addEventListener('click', function() {
	axios.post('http://localhost:9081/sport', {
    	id: parseInt(inpId.value),
    	name: inpName.value
  	})
  	.then(function () {
    	loadData();
    	inpId.value= '';
    	inpName.value= '';
 	})
  	.catch(function (error) {
    	console.log(error);
  	});
})

function loadData() {
	axios.get('http://localhost:9081/sport')
	.then(function(res) {
		convert(res.data);
	})
}

function convert(data) {
	var result= data.map(function(item) {
		return '<li>'+item.name+'</li>';
	});
	listOfSport.innerHTML= result.join("");
}

loadData();

  // axios.put('http://localhost:9081/sport', {
  //   id: 5,
  //   name: 'Ping'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });