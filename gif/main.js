 
// 	 Options: Man, Slow-Mo, Dance"
var userQuestion=prompt("What Gif would you like to see? Your options are: Man, Slow-Mo, Dance, Smilie");
userQuestion=userQuestion.toLowerCase();



if (userQuestion==="man"){
	document.write("You've chosen Man");
	document.write("<img src=\"ManFailing.gif\">");
}
	
else if (userQuestion==="slow-mo"){
	console.log("You've chosen Slow-Mo");
	document.write("<img src=\"SlowMotionCymbal.gif\">");
}

else if (userQuestion==="dance"){
	console.log("You've chosen Dance");
	document.write("<img src=\"CarletonDancing.gif\">")
}
else if (userQuestion==="smilie"){
	console.log("You've chosen Smilie");
	document.write("<img src=\"smilie.gif\">")
}


else {
	console.log("You did not chose a valid option!");
	document.write("You did not chose a valid option!")
}

	