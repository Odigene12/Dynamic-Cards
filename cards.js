// create variables
var create = document.getElementById("create");
var input = document.getElementById("userInput");
var contain = document.getElementById("containment");
var subContain = document.getElementById("output");
 //dynamic variables 
var card = document.getElementsByClassName("card"); 
var del = document.getElementsByClassName("delete");
// end of dynamic variables

// create event listener for user input
create.addEventListener("click", createCard);

// This function gets set off when envoked when the user clicks the create button
function createCard(){
	var output = '<div class= "card"> <section> <p class= "text"></section>' + input.value + '</p> <input type = "button" class = "delete" value="Delete"></div>';

	subContain

	.innerHTML += output;
	DeleteBtnEventLstn();
	
}



// Function that deletes whole card by specifically targetting the div class("card") that was created by the createCard function and removes that div
function DeleteBtnEventLstn(){
	for(var i=0; i < del.length; i++){
		del[i].addEventListener("click", function(e){
			e.path[1].remove();
		});
	}
}


// create event listener for delete card
// del.addEventListener("click", deleteCard)


// function deleteCard(){
// 	console.log("deleteCard is running");
// }
