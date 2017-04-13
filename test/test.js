/*
	Javascript Test Environment
	
	(test functions realization
	only)
*/

var output = document.getElementById("output");

function ASSERT_GENERAL(outcome, description) 
{
	var li = document.createElement("li");
	li.className = outcome ? "pass" : "fail";
	li.appendChild(document.createTextNode(description));

	output.appendChild(li);
}; 

function ASSERT_STR(exp, res)
{
	var pass_count = 0;

	if(exp.length != res.length) return false

	for(var i = 0; i < exp.length; i++) {
		for(var j = 0; j < res.length; j++) {
			if (exp[i] === res[j]) {
				pass_count++
				break;
			}
		}
	}
	return pass_count == exp.length ? true : false
}






































