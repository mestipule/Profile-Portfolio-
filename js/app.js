// $(document).foundation()

// Initialize Firebase
$(document).ready(function() {
  if ($('#newContact').length > 0) {
    contactScript();
  }
});

function contactScript() {
  var a = {
    apiKey: "AIzaSyAIdmtv4hKcy4ScQZjehyX_DCd7Xeh4Jcs",
    authDomain: "portfolio-a9746.firebaseapp.com",
    databaseURL: "https://portfolio-a9746.firebaseio.com",
    projectId: "portfolio-a9746",
    storageBucket: "portfolio-a9746.appspot.com",
    messagingSenderId: "815748766966"
  };
  firebase.initializeApp(a);

  var b = firebase.database().ref("messages");
  $("#newContact").submit(function(a) {
    $(this), console.log("Submit to Firebase");
    var c = $("#name-contact").val(),
      d = $("#email-contact").val(),
      e = $("#message-contact").val(),
      f = {
        name: c,
        email: d,
        message: e
      };
    // return b.push(f).then(function (a) {
    //     $(".success").css("display", "block"),
    //         $(".success-none").css("display", "none")
    // }), !1
    b.push(f);
    return false;
  });
}