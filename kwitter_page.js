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
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:msg,
            name: user_name,
            like: 0
      });
      document.getElementById("msg").value="";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_page.html");
}