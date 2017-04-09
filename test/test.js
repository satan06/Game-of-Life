var output = document.getElementById("output");

function assert(outcome, description) 
{
	var li = document.createElement("li");
	li.className = outcome ? "pass" : "fail";;
	li.appendChild(document.createTextNode(description));

	output.appendChild(li);
}; 

//test example

function add(num1, num2)
{
	return num1 + num2;
}

var resultOfAdd = add(5, 20);

assert(resultOfAdd === 25, "Checking the add function");