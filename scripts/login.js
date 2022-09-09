// async function setted(){
//   event.preventDefault();
// let log={
//  username:document.getElementById("usernamee").value,
//   email:document.getElementById("emaill").value,
//   password:document.getElementById("passwordd").value,
// }
// log=JSON.stringify(log);
// let resis=await fetch(logu,
// {method:"POST",
// body:log,
// headers:{
//   "content-type": "application/json"
// }});
// let dat=await resis.json();
// console.log(dat);
// let name=document.getElementById("usernamee").value;
// trrim(name,dat.token)

//  // }


let Login = async () => {
  let login_data = {
    username: document.getElementById("login-username").value,
    password: document.getElementById("login-password").value,
  };

  //console.log(login_data)
  login_data = JSON.stringify(login_data);
  // get or post which we one you can use ;

  let login_api_link = `https://masai-api-mocker.herokuapp.com/auth/login`;


  let response = await fetch(login_api_link,{
    method: "POST",
    body: login_data,
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log(data)

  token = data.token;

  let name = document.getElementById("login-username").value;
  let datals = {
    username: name,
    usertoken: token,
  };

  if (data.error === false) {
   
    append(token, name);
    
  }
};

let append = async (token, name) => {
  let user_data = `https://masai-api-mocker.herokuapp.com/user/${name}`;
  let user_response = await fetch(user_data, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let bolean = await user_response.json();


  if (
    bolean.description === "user" ||
    bolean.description === "User" ||
    bolean.description === "USER"
  ) {
    localStorage.setItem("data", JSON.stringify(bolean));
    localStorage.setItem("login",JSON.stringify(true))
    window.location.href = "index.html";
  } else if (
    bolean.description === "Admin" ||
    bolean.description === "admin" ||
    bolean.description === "ADMIN"
  ) {
    localStorage.setItem("data", JSON.stringify(bolean));
    localStorage.setItem("login",JSON.stringify(true))
    window.location.href = "admin.html";
  } else {
    alert("please set you user type first");
  }
  console.log(bolean);
};
