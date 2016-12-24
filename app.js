/*function save() {
	localStorage.setItem("FirstUserName", "Niaz ali");
}
function get() {
	var myUser = localStorage.getItem("FirstUserName");
	document.write(myUser);
}
*/
function remove() {
	localStorage.clear();
}

function storage() 
{
	var name1 = document.getElementById("name").value;
	var pasword1 = document.getElementById("password").value;
	if (name1 === isNaN()){
		localStorage.setItem("userName",  name1);
	}
	if (pasword1.length <= 8){
		localStorage.setItem("Password",  pasword1);
	}

		else{
		//localStorage.setItem("userName",  name1);	
		//localStorage.setItem("Password",  pasword1);
		var error = document.getElementById("remarks").innerHTML = "It is Not Valid userName Or Pasasword";
		 document.getElementById("remarks").style.color = "red";
		}
		}

function get() {
	var watch1  = localStorage.getItem("userName");
	var watch2 = localStorage.getItem("Password");
	document.write(watch1);
	document.write(watch2);
}