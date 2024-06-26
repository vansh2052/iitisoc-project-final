
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQvGkprrLIhpk5gS1QIfjHF7fjomidHMI",
  authDomain: "vertex-trading-platform.firebaseapp.com",
  projectId: "vertex-trading-platform",
  storageBucket: "vertex-trading-platform.appspot.com",
  messagingSenderId: "570296071360",
  appId: "1:570296071360:web:583bf8b724f8d224c1e925"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'

const user=auth.currentUser;

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail)
  
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").textContent = userProfilePicture;
  
  }
  
onAuthStateChanged(auth,(user) => {
    if (user){
        updateUserProfile(user);
        const uid=user.uid;
        return uid;
    } else{
        alert("Create Account & Login");
        window.location.href="/register.html";
    }

});

  
  
  

