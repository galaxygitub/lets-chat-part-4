var firebaseConfig = {
      apiKey: "AIzaSyAqAK85jbcVmN7Qn7ReBzQ398OV0qaQNds",
      authDomain: "kwitter-d249d.firebaseapp.com",
      databaseURL: "https://kwitter-d249d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-d249d",
      storageBucket: "kwitter-d249d.appspot.com",
      messagingSenderId: "736746265927",
      appId: "1:736746265927:web:143b006bf85671fffd0062"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name'id='"+Room_names+"' onclick='redirectToRoom(this.id)'> " + Room_names + " </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoom(name) 
{
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
} 

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_page.html");
}