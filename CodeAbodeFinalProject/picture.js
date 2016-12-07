//global variables

var magnifiedImage = document.getElementById("magnified-image");
var thumbnailGrid = document.getElementById("thumbnail-grid");
//var thumbnailImage = document.getElementById("image-" + 1);
var city = "chicago";
//

//mouseover and on mouse clicks ------------------------------START


// function chicagoButton(){
// 	city = "chicago";	
// 	for (var counter = 1; counter <=6; counter +=1 ){
// 		console.log(counter);
// 		var image = document.getElementById("image-" + counter);
// 		console.log(image);
// 		image.src = "images/chicago/" + counter + ".jpg";
// 	}
// 	magnifiedImage.src = "images/chicago/" + 1 + ".jpg";
// }
// chicagoButtonId.onclick = chicagoButton;



// function changethumbnailSize(){
	
// 		image.style.height = "50px";
// 		image.style.width = "50px";
// }
// chicagoButtonId.onmouseover = changethumbnailSize;
//making thumbnail size change on click

// var counter = 1
// var image = document.getElementById("image-" + counter);
// for (var counter = 1; counter < 7; counter = counter + 1)
// function changethumbnailSize(){
// 	image.style.height = "50px";
// 	image.style.width = "50px";
// }

// imageOne.onclick = changethumbnailSize;





//top navigation buttons --------------------------------------START
//THIS IS FINISHED 
var chicagoButtonId = document.getElementById("Chicago");

function chicagoButton(){
	resetThumbnails();
	city = "chicago";	
	for (var counter = 1; counter <=6; counter +=1 ){
		console.log(counter);
		var image = document.getElementById("image-" + counter);
		console.log(image);
		image.src = "images/chicago/" + counter + ".jpg";
	}
	magnifiedImage.src = "images/chicago/" + 1 + ".jpg";
	var image = document.getElementById("image-" + 1);
	
	lastClickedElement = image;

	image.style.height = "50px";
	image.style.width = "50px";
}
chicagoButtonId.onclick = chicagoButton;




var italyButtonId = document.getElementById("Italy");

function italyButton(){
	resetThumbnails();	
	city = "italy";
	for (var counter = 1; counter <=6; counter +=1 ){
		console.log(counter);
		var image = document.getElementById("image-" + counter);
		console.log(image);
		image.src = "images/italy/" + counter + ".jpg";
	}
	magnifiedImage.src = "images/italy/" + 1 + ".jpg";
	var image = document.getElementById("image-" + 1);
	
	lastClickedElement = image;

	image.style.height = "50px";
	image.style.width = "50px";

}
italyButtonId.onclick = italyButton;



var sydneyButtonId = document.getElementById("Sydney");

function sydneyButton(){
	resetThumbnails();	
	city = "sydney";
	for (var counter = 1; counter <=6; counter +=1 ){
		console.log(counter);

		var image = document.getElementById("image-" + counter);
		console.log(image);
		
		image.src = "images/sydney/" + counter + ".jpg";
	}
	magnifiedImage.src = "images/sydney/" + 1 + ".jpg";
	var image = document.getElementById("image-" + 1);

	lastClickedElement = image;

	image.style.height = "50px";
	image.style.width = "50px";
}

sydneyButtonId.onclick = sydneyButton;

//top navigation buttons --------------------------------------END


//forward button --------------------------------------START
// var forwardButton = document.getElementById("forward-button"); //created a forward button variable 
// var forwardTracker = 0; //picture tracker is set to first image


// function buttonForward(){	
// 	resetThumbnails();
// 	forwardTracker += 1; //will increment by one
	
// 	if (forwardTracker === 7){ //if picture tracker is equal to 6
// 		forwardTracker = 1;	//picture tracker will reset to first image
// 	}

// 	magnifiedImage.src = "images/" + city + "/" + forwardTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder
// }

// forwardButton.onclick = buttonForward;

//forward button --------------------------------------END


//changes thumbnails----------------------------------------
var magnifiedImage = document.getElementById("magnified-image");

function clickPictures(){
	
	var clickedElement = event.target;
	
	if (clickedElement.tagName === "IMG") {
		resetThumbnails();
		magnifiedImage.src = clickedElement.src; //puts the clicked image into the image source
		
		clickedElement.style.height = "50px";
		clickedElement.style.width = "50px";
	}	

}

// Bind the function to the thumbnail-grid div's onclick event
thumbnailGrid.onclick = clickPictures; //this will happen when you click on the thumbnail 

//--------------------------------------------------------------

function resetThumbnails(){	
	for (var counter = 1; counter <=6; counter +=1 ){
		var image = document.getElementById("image-" + counter);
		
		image.style.height = "75px";
		image.style.width = "75px";
	}
}

//thumbnailGrid.onclick = resetThumbnails;



// var counter = 1
// //for (var counter = 1; counter <=6; counter +=1 );
// 	var thumbnailImage = document.getElementById("image-" + 1);

		

// function changethumbnailSize(){
	
// 		//thumbnailImage.style.height = "50px";
// 		//thumbnailImage.style.width = "50px";
// 		thumbnailImage.style.color = "purple";
// }
// thumbnailImage.onmouseover = changethumbnailSize;


//---------------------------------------------------------------
//forward button
// var counter = 1
// var city = document.getElementById("");



//making variables for my thumbnail grid and magnified image

// var magnifiedImage = document.getElementById("magnified-image");
// var image = document.getElementById("image");


// function clickPictures(){
// 	var clickedElement = event.target;
	
// 	if (clickedElement.tagName === "IMG") {
// 	magnifiedImage.src = clickedElement.src; //puts the clicked image into the image source
// 	}	
// }  
// // Bind the function to the thumbnail-grid div's onclick event
// thumbnailGrid.onclick = clickPictures; //this will happen when you click on the thumbnail 


//first milestone end
//----------------------------------------------------------------------
//second milestone beginning  
// //trying to get the forward button to work
// var forwardButton = document.getElementById("forward-button"); //created a forward button variable 
// var forwardTracker = 0; //picture tracker is set to first image


// function buttonForwardInteractive(){	
// 	forwardTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/italy/" + forwardTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (forwardTracker === 6){ //if picture tracker is equal to 6
// 		forwardTracker = 0;	//picture tracker will reset to first image
// 	}	
// }

// forwardButton.onclick = buttonForwardInteractive; //when forward button is click it will start the function buttonInteractive
//second milestone end
//----------------------------------------------------------------------
//third milestone beginning - still having trouble with this one
//trying to get the back button to work 
// var backButton = document.getElementById("back-button"); //created a back button variable
// var backTracker = 6; //picture tracker is set to last image

// function buttonBackInteractive(){	
// 	backTracker -= 1; 
// 	magnifiedImage.src = "images/italy/" + backTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (backTracker === 1){ 
// 		backTracker = 6;	
// 	}	
// }

// backButton.onclick = buttonBackInteractive; //when forward button is click it will start the function buttonInteractive
//third milestone end

//----------------------------------------------------------------------
//this code has been duplicated
// var chicagoButtonId = document.getElementById("Chicago");
// var chicagoTracker = 1; //picture tracker is set to first image

// function chicagoButton(){	
// 	chicagoTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/chicago/" + chicagoTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (chicagoTracker === 6){ //if picture tracker is equal to 6
// 		chicagoTracker = 0;	//picture tracker will reset to first image
// 	}	
// }
// chicagoButtonId.onclick = chicagoButton;



// var sydneyButtonId = document.getElementById("Sydney");
// var sydneyTracker = 1; //picture tracker is set to first image

// function sydneyButton(){	
// 	sydneyTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/sydney/" + sydneyTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (sydneyTracker === 6){ //if picture tracker is equal to 6
// 		sydneyTracker = 0;	//picture tracker will reset to first image
// 	}	
// }
// sydneyButtonId.onclick = sydneyButton;



// var italyButtonId = document.getElementById("Italy");
// var italyTracker = 1; //picture tracker is set to first image

// function italyButton(){	
// 	italyTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/italy/" + italyTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (italyTracker === 6){ //if picture tracker is equal to 6
// 		italyTracker = 0;	//picture tracker will reset to first image
// 	}	
// }
// italyButtonId.onclick = italyButton;





// var chicagoButtonId = document.getElementById("Chicago");
// var sydneyButtonId = document.getElementById("Sydney");
// var italyButtonId = document.getElementById("Italy");

// var topTracker = 1; //picture tracker is set to first image

// function topButtons(){	
// 	topTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/chicago/" + topTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (topTracker === 6){ //if picture tracker is equal to 6
// 		topTracker = 0;	//picture tracker will reset to first image
// 	}	
// }

// chicagoButtonId.onclick = topButtons;

// var button = document.getElementById("back-button");


// //------------------------------------------------------
// //making thumbnail size change on click

// //var counter = 1
// // var imageOne = document.getElementById("image-" + counter);
// // for (var counter = 1; counter < 7; counter = counter + 1)


// function changethumbnailSize(){
// 	imageOne.style.height = "50px";
// 	imageOne.style.width = "50px";
// }

// imageOne.onclick = changethumbnailSize;



