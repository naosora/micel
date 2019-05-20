
var provider = new firebase.auth.GoogleAuthProvider();
$('#login').click(function () {

  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log(result.user);
  });
});

function login2() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log(result.user);
  });
}


$('#salir').click(function () {
    firebase.auth().signOut(provider).then(function () {
      alert("Se cerro la Session");
      console.log(result);
    }).catch(function (error) {
      // An error happened.
    });
  });


  function lface() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      alert("Exitoso");
     
    }).catch(function (error) {
      alert("Error");

    });
  }




  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("reg_div").style.display = "none";
      document.getElementById("menu").style.display = "none";
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {

  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("reg_div").style.display = "none";
      document.getElementById("menu").style.display = "none";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
     
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
    alert("Se cerro la Session");
    console.log(result);
  }
  function registrar(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
};


var providert = new firebase.auth.TwitterAuthProvider();
function ltwitter(){
  firebase.auth().signInWithPopup(providert).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
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
  });
}
