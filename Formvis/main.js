


var data = [];

// Get references to DOM elements
var dataForm = document.getElementById("data-form"); //this is where you input you score
var scoreInput = dataForm.elements["score"];
var addDataButton = dataForm.elements["add-data"];

dataForm.onsubmit = addData; //calling addData function

function addData(event) {
	//console.log("hit")

	event.preventDefault();

	var score = scoreInput.value; //getting the value of the score


	if ((score !== "") && (score >= 0) && (score <= 100)) {
		
	
		if (data.length === 10) {

			data.shift();
		}

		data.push(score);
		updateGraph();
	}
}


function updateGraph() {
	for (var i = 0; i < data.length; i += 1) {
		var score = data[i]; 
		var currentBar = document.getElementById("bar-" + i);
		currentBar.style.height = 4 * score + "px";
		var barCaption = currentBar.firstElementChild;
		barCaption.textContent = score;
	}
}