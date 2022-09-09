

let Register = async () => {
    let signup_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };
    // who needs this kind of data ?  ---> object form
    //    company needs your data who is you where are you stand it
    // its is in JSON format  ;
    signup_data = JSON.stringify(signup_data);

    let signup_api_link = `https://masai-api-mocker.herokuapp.com/auth/register`;
    // fetch ;
    // custom setting ; its in object
    // get or post ;
    let response = await fetch(signup_api_link, {
      method: "POST", // its is the catogory of post ;
      body: signup_data, // sending to the data into data base
      headers: {
        "Content-Type": "application/json", // its is mustt be required  ;
      },
    });
    let data = await response.json();
    console.log(data);
    window.location.href="login.html"
  };
