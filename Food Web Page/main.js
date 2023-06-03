const firebaseConfig = {
    apiKey: "AIzaSyAv0gY1fz30WYr8tYx_bqc4axDMa4vlaHA",
    authDomain: "cloud-9eae5.firebaseapp.com",
    databaseURL: "https://cloud-9eae5-default-rtdb.firebaseio.com",
    projectId: "cloud-9eae5",
    storageBucket: "cloud-9eae5.appspot.com",
    messagingSenderId: "1002607228053",
    appId: "1:1002607228053:web:5e77175f61ba7bbbc6179c",
    measurementId: "G-F7BEPHWW1P"
  };
firebase.initializeApp(firebaseConfig);

function writeData()
{
  firebase.database().ref("AbhirupsDataBase").push({
    email:document.getElementById("email").value,
    password:document.getElementById("password").value
  })
}

