window.onload = function() {
	console.log ("drag connected")
}
//this function prevents the default handling of the element
function letDrop (ev) {
	ev.preventDefault();
}

function whatToDrag (ev) {
	ev.dataTransfer.setData("text", ev.target.id); //dataTransfer.setData sets the data type and value of the dragged data
	//text is the data type and the event.target.id is the value of the dragged data which is (drag1)
}

function doTheDrop(ev) {
	ev.preventDefault();//prevents the default handling
	var data = ev.dataTransfer.getData("text");//gets the dragged datat with the dataTransfer.getData method
	//this will return data that was set in the .setData()method
	ev.target.appendChild(document.getElementById(data));
}

