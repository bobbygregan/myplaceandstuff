$(document).ready(function() {
var config = {
    apiKey: "AIzaSyCYrJ_qf-zcxJgk1JTAzSmOIr1oKbxglj4",
    authDomain: "my-awesome-project-14816.firebaseapp.com",
    databaseURL: "https://my-awesome-project-14816.firebaseio.com",
    storageBucket: "my-awesome-project-14816.appspot.com",
    messagingSenderId: "227422167597"
  };
  firebase.initializeApp(config);

  $("#emaillogin").click (function() {
  	alert('test;')
	var email = $('#mylogin').val();
	var password = 'abc123';
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorMessage);
	  // ...
	}); 
	});  

  $('.start-a-search-btn').click(function() { $("#start-a-search").modal();
});




var provider = new firebase.auth.GithubAuthProvider(); 
provider.addScope('repo'); 

$('#github').click(function(){ 
	alert("logging in");

	//THIS NEXT LINE SHOULDN'T BE HERE. MOVE IT INTO THE AUTH BLOCK FURTHER DOWN.
	// THIS IS KIND OF HACKY. CHAAAAAANGE IT.
	$('#logout').show();
	$('#p').hide();

	firebase.auth().signInWithPopup(provider).then(function(result) {
	console.log(result);
  	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	}, function(error) {
		console.log("Oops! There was an error");
		console.log(error);
	}); 
});

$('.btn_groupchat').click(function(){
	$('#home_content').hide(); 
	$('#app_content').show(); 
}); 

$('.btn_home').click(function(){
	$('#home_content').show(); 
	$('#app_content').hide(); 
}); 

$('.btn_Direct_Msg').click(function(){
	$('#home_content').hide();
	$('#app_content2').show();
});


$('#logout').click(function(){
	alert('logging out'); 


	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
		alert('test');
	  $('#logout').hide();
	}, function(error) {
	  // An error happened.
		alert('error');
	});

	}); 
$('#Submit').click(function() {
}); 
	

		var todoRef = database.ref('/todos/'+loggedUser.id);

		// make sure the new todo isn't blank
		if ($("#nSubmit").val() != "") {

			// add the todo and update the values. finally close the modal
			todoRef.push($("#new-todo-text").val());
			$("#Submit").val("");
			$("#add-modal").modal('hide');
		}
	});


