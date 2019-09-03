//Firebase credentials & API key
var firebaseConfig = {
    apiKey: "AIzaSyDL6-BUlDeA7MgRJg9wHXKJM34AofoZNkI", //CHECK HOW TO HIDE
    authDomain: "train-scheduler-b4b78.firebaseapp.com",
    databaseURL: "https://train-scheduler-b4b78.firebaseio.com",
    projectId: "train-scheduler-b4b78",
    storageBucket: "train-scheduler-b4b78.appspot.com",
    messagingSenderId: "287640431879",
    appId: "1:287640431879:web:5f49dbaeedd2ce9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Assign firebase.database to a variable
  var database = firebase.database();

  //Create click function to grab the values the user input into each form 
  $("#submitBtn").on("click", function(){
    //prevent the page from refreshing in click
    event.preventDefault()
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    //Format the value of the time of first train into hours and minutes
    var firstTrain = moment($("#first-train").val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $("#frequency").val().trim();

    //Create object to push the values of each form input up to the database for storage
    var newTrain = {
      name: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    }

    //Push object above to database
    database.ref().push(newTrain);

    //Create an alert once the data has been pushed to alert the user
    alert("Your train has been added!");

    //Empty all forms after button click
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");
  });

  //Reassign variables above by grabbing data from database
  database.ref().on("child_added", function(snapshot){
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    //Find difference (in minutes) from current time to the listed first train time
    var findTime = moment().diff(moment.unix(firstTrain), "minutes")
    //Find the remainder of time by using modulus operator
    var remainder = findTime % frequency;
    //Subtract remainder from the frequency to get minutes left until arrival
    var minutes = frequency - remainder;
    //Add minutes variable to the current time and convert to AM/PM
    var arrival = moment().add(minutes, "m").format("HH:mm A");

    //Append all info into train table tbody
    $("tbody").append(
      "<tr><td>" + name +
      "</td><td>" + destination +
      "</td><td>" + arrival +
      "</td><td>" + minutes + " min." +
      "</td><td>" + frequency + " min." +
      "</td></tr>")
  
    //Handle any errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });