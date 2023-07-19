function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Please enter your username and password.");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
  
    if (!validateLogin()) {
      return;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username + "&password=" + password);
  
    xhr.onload = function() {
      if (xhr.status == 200) {
        window.location.href = "protected.php";
      } else {
        alert("Login failed.");
      }
    };
  });