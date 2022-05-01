
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAPnQzMiYP4eQYWBddAD-MbawdbVOt4GLc",
  authDomain: "social-website-852b3.firebaseapp.com",
  databaseURL: "https://social-website-852b3-default-rtdb.firebaseio.com",
  projectId: "social-website-852b3",
  storageBucket: "social-website-852b3.appspot.com",
  messagingSenderId: "126877454758",
  appId: "1:126877454758:web:8b751cbac36d4814ab3f67",
  measurementId: "G-F6WNF00V92"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user-name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+" !";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          room:"123"
    });

    localStorage.setItem("room",room_name);
    window.location="kwitter_page.html";

}


function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log(room_name);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;


  //End code
  });});}
getData();

function redirectToRoomName(name)
{
localStorage.setItem("room",name);
window.location="kwitter_page.html";
}

function logout()
{ 
   localStorage.removeItem("user-name");
   localStorage.removeItem("room");
   window.location="kwitter.html";
   }