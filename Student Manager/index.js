var readlineSync = require('readline-sync');
var fs = require('file-system');
var dataString = fs.readFileSync('./data.json', {
    encoding: 'utf8'
});
var data = JSON.parse(dataString);

function showOption() {
	console.log('\n');
    console.log('0. Show all contact');
    console.log('1. New contact');
    console.log('2. Edit a contact');
    console.log('3. Delete a contact');
    console.log('4. Find a contact');
    console.log('5. Save and exit');
    var option = readlineSync.question('> ');
    switch (option) {
        case '0':
            showAll();
            showOption();
            break;
        case '1':
            addContact();
            showOption();
            break;
        case '2':
            var editWho = readlineSync.question('Who do you want to edit? ');
            editContact(editWho);
            showOption();
            break;
        case '3':
        	var deleteWho = readlineSync.question('Who do you want to delete? ');
            deleteContact(deleteWho);
            showOption();
            break;
        case '4':
        	var string = readlineSync.question('Who/ What number do you want to find? ');
            findContact(string);
            showOption();
            break;
        case '5':
            save();
            // showOption();
            break;
        default:
            console.log('Wrong option');
            showOption();
            break;
    }
}

function showAll() {
    for (var dat of data) {
        console.log(dat);
    }
}

function addContact() {
    var name = readlineSync.question('Name: ');
    var nameArr= [];
    for (var dat of data) {
    	nameArr.push(dat.name);
    }
    if (nameArr.includes(name)) {
        if (readlineSync.keyInYN('This contact has existed. Would you like to replace it?') === false) {
            // `N` key was pressed.
           	//process.exit();
            showOption();

        } else {
	        dat.name= name;    //because of editContact() just write phone number;
	        editContact(name);
	    }    
    } else {
	    var phoneNumber = readlineSync.question('Phone number: ');
	    var dat = {
	    	name: name,
	        phoneNumber: (phoneNumber)
	    }
	    data.push(dat);
	    
    }
    
}

function editContact(editWho) {
    for (var dat of data) {
        if (dat.name === editWho) {
            dat.phoneNumber = readlineSync.question('Type new phone number: ');
        }
    }
}

function deleteContact(deleteWho) {
	for (var dat of data) {
    	var nameArr= [];
    	nameArr.push(dat.name);
    }	
    if (!nameArr.includes(deleteWho)) {
    	console.log('Contact not exist!');
    } else {
    	if(!readlineSync.keyInYN('Are you sure?')) {
    		showOption();
    	} else {
	    	data= data.filter(function(x) {
		 		return x.name !== deleteWho; 
		 	}); 
		    console.log('=== done ===');
		}    
    }
}

function findContact(string) {
	var result= [];
	for(var dat of data) {
		if (dat.name.toLowerCase().includes(string.toLowerCase())|| dat.phoneNumber.includes(string)) {
			result.push(dat);
		}
	}
	for(var dat of result) {
		console.log(dat);
	}
}

function save() {
	dataString= JSON.stringify(data);
	fs.writeFileSync('./data.json', dataString);
	console.log('=== saved ===')
}

function main() {
    showOption();
}
main();