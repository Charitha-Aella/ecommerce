/* DEFAULT ADMIN */

let users =
  JSON.parse(localStorage.getItem("users"))
  || [];

const adminExists =
  users.find(user => user.username === "admin");

if(!adminExists){

  users.push({
    username:"admin",
    password:"admin123",
    role:"admin"
  });

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );
}

/* REGISTER */

function register(){

  const username =
    document.getElementById("registerUsername").value;

  const password =
    document.getElementById("registerPassword").value;

  if(username === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

  const existingUser =
    users.find(user => user.username === username);

  if(existingUser){
    alert("User already exists");
    return;
  }

  users.push({
    username,
    password,
    role:"user"
  });

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  alert("Registration successful");

  window.location.href = "login.html";
}

/* LOGIN */

function login(){

  const username =
    document.getElementById("loginUsername").value;

  const password =
    document.getElementById("loginPassword").value;

  let users =
    JSON.parse(localStorage.getItem("users"))
    || [];

  const validUser =
    users.find(
      user =>
      user.username === username
      &&
      user.password === password
    );

  if(!validUser){
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(validUser)
  );

  if(validUser.role === "admin"){
    window.location.href = "admin.html";
  }
  else{
    window.location.href = "index.html";
  }

}

/* LOGOUT */

function logout(){

  localStorage.removeItem("currentUser");

  window.location.href = "login.html";
}