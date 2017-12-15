const allPosts = [];

$( '#button' ).click(function() {
	// alert('nice click!');
	let $toPost = $('#submission').val();
	if ($toPost == '') {
		alert('There is nothing to add to the list!')
	} else {
	allPosts.push($toPost);
	$('#submission').val(null);
	makeAPost();
	}
});

$('#submission').keyup(event => {
	if (event.which == 13) {
	// alert('nice click!');
	let $toPost = $('#submission').val();
	if ($toPost == '') {
		alert('There is nothing to add to the list!')
	} else {
	allPosts.push($toPost);
	$('#submission').val(null);
	makeAPost();
	}
}
});

const makeAPost = () => {
	let $history = $('#feed');
	let $listItem = $("<li>");
	let $postText = allPosts[allPosts.length-1];
	$listItem.append($postText);
	$history.append($listItem);	
}