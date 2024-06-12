
function Login() {
  document.getElementById('Logindiv').style.borderBottom = "2px solid white";
  document.getElementById('Logindiv').style.borderRadius = "2px";
  document.getElementById('Signupdiv').style.borderBottom = "none";
  document.getElementById('SignUpButton').innerHTML = "LOGIN";
  document.getElementById("Signid").style.display = 'none';
}

function Signup() {
  document.getElementById('Logindiv').style.borderBottom = "none";
  document.getElementById('Signupdiv').style.borderBottom = "2px solid white";
  document.getElementById('Signupdiv').style.borderRadius = "2px";
  document.getElementById('SignUpButton').innerHTML = "SIGNUP";
  document.getElementById("Signid").style.display = 'block';
}
document.getElementById('Logindiv').style.borderBottom = "2px solid white";
document.getElementById('Logindiv').style.borderRadius = "2px";
document.getElementById('SignUpButton').innerHTML = "LOGIN";

async function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  
  // Send signup data to backend for processing
  const response = await fetch('signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      fullname: fullname,
      phone: phone,
      age: age
    })
  });
  
  const result = await response.json();
  if (result.success) {
    alert("Signup successful!");
  } else {
    alert("Signup failed.");
  }
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Send login data to backend for processing
  const response = await fetch('login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });
  
  const result = await response.json();
  if (result.success) {
    alert("Login successful!");
  } else {
    alert("Login failed. Please sign up.");
  }
}