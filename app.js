const allPosts = [];
const $delBut = "<button class='delete'>Remove</button>"
const $doneBut = "<button class='done'>Complete</button>"
const $impBut = "<button class='important'>Priority</button>"
// Runs post functionality if button is clicked
$( '#button' ).click(function() {
	fieldValue();
});

// Runs post functionality if enter is pressed
$('#submission').keyup(event => {
	if (event.which == 13) {
		fieldValue();
	}
});


// Puts the new list item on the post 
const makeAPost = () => {
	// Adds the newest value from an array that stores all posts into a list element
	let $history = $('#feed');
	let $listItem = $("<li>");
	let $postText = allPosts[allPosts.length-1];
	// Adds the new list element to the HTML
	$listItem.append($postText);
	$history.append($listItem);
	// Adds buttons to each list item
	$listItem.append($impBut + $doneBut + $delBut);
	// Adds button functionality to each list item
	deleteButton();
	completeButton();
	impButton();
}

// Sets the input to be added to the list and alerts the user if nothing is in the input field
const fieldValue = () => {
	// Stores the input value
	let $toPost = $('#submission').val();
	// Stops the function and alerts the user if there is nothing in the field
	if ($toPost == '') {
		alert('There is nothing to add to the list!')
	} else {
	// If the field has a value the value is added to an array and then reset to null
	allPosts.push($toPost);
	$('#submission').val(null);
	makeAPost();
	}
};

// The following set up functionality for 3 different buttons that can be used to modify the list
const deleteButton = () => {
	$('.delete').click((event) => {
		$(event.target).parent().remove();
		$(event.target).remove();
	})
};

const completeButton = () => {
	$('.done').click((event) => {
		$(event.target).parent().css("text-decoration", "line-through");
		$(event.target).prev().remove();
		$(event.target).remove();
	})
};

const impButton = () => {
	$('.important').click((event) => {
		$(event.target).parent().css({"color": "red", "text-transform": 'uppercase'});
		$(event.target).remove();
	})
};