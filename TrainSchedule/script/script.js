 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyB4jzm0tbmxFtXex4i8bE5-4GhSsb8RXG4",
     authDomain: "users-51553.firebaseapp.com",
     databaseURL: "https://users-51553.firebaseio.com",
     projectId: "users-51553",
     storageBucket: "users-51553.appspot.com",
     messagingSenderId: "80362863635",
     appId: "1:80362863635:web:881e543d3543dd5f"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var database = firebase.database();

 $("#submit").on("click", function () {
     var trainInput = $("#train").val().trim();
     var destinationInput = $("#destination").val().trim();
     var firstTrainInput = $("#firstTrain").val().trim();
     var frequencyInput = $("#frequency").val().trim();

     database.ref().push({
         trainName: trainInput,
         destination: destinationInput,
         firstTrain: firstTrainInput,
         frequency: frequencyInput
     })
 })


 //display data from initial load
 database.ref().on("child_added", function (snapshot) {
     var trainName = snapshot.val().trainName;
     var destination = snapshot.val().destination;
     var firstTrain = snapshot.val().firstTrain;
     var frequency = snapshot.val().frequency;


 // Assumptions
 var tFrequency = frequency;

 // first train time
 var firstTime = firstTrain;

 // First Time
 var firstTimeConverted = moment(firstTime, "HH:mm")

 // Current Time
 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 // Difference between the times
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);

 // Time apart (remainder)
 var tRemainder = diffTime % tFrequency;
 console.log(tRemainder);

 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 // Next Train
 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

 //next train arrival time
 var nextTrainRev = moment(nextTrain).format("hh:mm A");

     var tr = $("<tr>");

     var td1 = $("<td>");
     td1.text(trainName);
     tr.append(td1);

     var td2 = $("<td>");
     td2.text(destination);
     tr.append(td2);

     var td3 = $("<td>");
     td3.text(frequency);
     tr.append(td3);

     var td4 = $("<td>");
     td4.text(nextTrainRev);
     tr.append(td4);

     var td5 = $("<td>");
     td5.text(tMinutesTillTrain);
     tr.append(td5);

     $("tbody").append(tr);
 });