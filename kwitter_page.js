//YOUR FIREBASE LINKS
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


var room_name = localStorage.getItem("room");
var user_name = localStorage.getItem("user-name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            user:user_name,
            msg:msg,
            like:0
      });

}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) 
  { childKey  = childSnapshot.key; 
      childData = childSnapshot.val();
       if(childKey != "room") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     console.log(firebase_message_id);
     console.log(message_data);
     Name=message_data['user'];
     message=message_data['msg'];
     Like=message_data['like'];
     nameTag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
     messageTag="<h4 class= 'message_h4'>"+message+"</h4>";
     like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";

 row=nameTag+messageTag+like_button+span_with_tag;
 
 document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
  { 
      console.log("clicked on like button - " + message_id);
   button_id = message_id;
    likes = document.getElementById(button_id).value; 
    updated_likes = Number(likes) + 1; 
    console.log(updated_likes); 
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); 
}

function logout()
 { 
       localStorage.removeItem("user-name");
        localStorage.removeItem("room");
         window.location="kwitter.html";
       }