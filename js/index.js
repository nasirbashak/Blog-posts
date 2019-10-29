var firebaseConfig = {
    apiKey: "AIzaSyBvlaZw1DUUDU_rFEX0rkPyiY5gXLCKWw8",
    authDomain: "wadrobe-4e7f1.firebaseapp.com",
    databaseURL: "https://wadrobe-4e7f1.firebaseio.com",
    projectId: "wadrobe-4e7f1",
    storageBucket: "wadrobe-4e7f1.appspot.com",
    messagingSenderId: "251582900725",
    appId: "1:251582900725:web:fd050deb400e85790f58bc",
    measurementId: "G-CJ461YXPG2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

//TODO
//firebase.analytics();

console.log(firebase);

$("#btn-signin").click(function() {
    // console.log("Sign in Clicked");

    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "" && password == "") {
        window.alert("Please enter the details");

    } else {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

            var errCode = error.code;
            var message = error.message;

            window.alert("You have an error " + message);
        });
    }

});

$("#logout-btn").click(function() {

    //console.log("Logout clicked");

    firebase.auth().signOut().then(function() {
        console.log("user signed out");
    }, function(error) {
        console.log("Signout error " + error.message);

    });


});

$("#btn-signup").click(function() {

    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {

        var user = firebase.auth().currentUser;

        console.log(user);
        window.alert("Your Signup successful with name " + user.displayName);

        window.location.href = "signin.html";

    }, function(error) {

        var errCode = error.code;
        var message = error.message;

        window.alert("You have an error " + message);


    });



});