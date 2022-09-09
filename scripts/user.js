const main = document.getElementById("main");

let append = async () => {
  let user_data = `http://127.0.0.1:3000/api/restaurant_item`;
  let user_response = await fetch(user_data, {
    method: "GET",
  });
  let data = await user_response.json();
  showmovie(data);
  let data5 = JSON.parse(localStorage.getItem("login"));
  if (data5 == true) {
    let path = JSON.parse(localStorage.getItem("data")) || {};
    console.log(path);
    document.getElementById("onw").innerText = path.username;
    document.getElementById("email_user").innerText = path.email;
    document.getElementById("patch").innerText = "Log-Out";
  }
};

let jadu = () => {
  console.log("hi");
  localStorage.removeItem("data");
  localStorage.removeItem("login");
  window.location.href = "index.html";
};

function showmovie(data) {
  main.innerHTML = null;

  data.forEach((el) => {
    let movieE2 = document.createElement("div");
    let movieE1 = document.createElement("div");
    movieE1.classList.add("movie");
    movieE1.innerHTML = `
           
            <img  id="image_con" src="${el.Image}" alt="${el.Title}">
                   
                   
            <div class="movie-info">
                <h3>Food:${el.Title}</h3>
                <br>
                <h4>Price:₹${el.Price}</h4>
                <span class="${getcolor(el.Ratings)}">Rating:${
      el.Ratings
    }</span>
            </div>
            <div class="overview">
                <h3>Description</h3>
            ${el.Description}
            </div>
          
            
            `;
    let div = document.createElement("div");

    div.innerHTML = `
          <button id="btn"onclick="order()">Order</button>
          `;

    movieE2.append(movieE1, div);
    main.appendChild(movieE2);
  });
}

function getcolor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

let order = () => {
  let data = JSON.parse(localStorage.getItem("login"));
  if (data != true) {
    alert("Please login to continue");
  } else {
    window.location.href = "checkout.html";
  }
};

let sortLh = async () => {
  let res = await fetch(
    `http://127.0.0.1:3000/api/restaurant_item/?_sort=Price&_order=asc`
  );
  let data = await res.json();
  console.log(data);
  showmovie(data);
};

async function sortGt5() {
  let res = await fetch(
    `http://127.0.0.1:3000/api/restaurant_item/?Ratings_gte=5`
  );
  let data = await res.json();
  console.log(data);
  showmovie(data);
}

async function sortGt7() {
  let res = await fetch(
    `http://127.0.0.1:3000/api/restaurant_item/?Ratings_gte=7`
  );
  let data = await res.json();
  console.log(data);
  showmovie(data);
}
