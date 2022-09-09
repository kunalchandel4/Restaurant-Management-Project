let form1 = document.getElementById("menu");

let form2 = document.getElementById("remove");

let form3 = document.getElementById("update_menu");

let form4 = document.getElementById("update_content");

let next1 = document.getElementById("add_menu");
let next2 = document.getElementById("remove_menu");
let next3 = document.getElementById("update_menu");
let next4 = document.getElementById("content");
const main = document.getElementById("main")


let change= ()=>{
   
        form1.style.left="450px";
        form2.style.left="-450px";
        form3.style.left="-450px";
        form4.style.left="-450px";
        
        
  
}
let change_one= ()=>{
   
    form1.style.left="-450px";
    form2.style.left="450px";
    form3.style.left="-450px";
    form4.style.left="-450px";
    
  

}
let change_two= ()=>{
   
   
    form1.style.left="-450px";
    form2.style.left="-450px";
    form3.style.left="450px";
    form4.style.left="-450px";
    
   

}
let change_three= ()=>{
   
   
    form1.style.left="-450px";
    form2.style.left="-450px";
    form3.style.left="-450px";
    form4.style.left="450px";
    
   

}
let value=(id)=>{
    return document.getElementById(id).value ;
   
  }

  let delete_product= async ()=>{

    let product_id = value("remove_id") ;
    let response = await fetch (`http://127.0.0.1:3000/api/restaurant_item/${product_id}`,{
        method:"DELETE" ,
      
        headers:{
            "Content-Type":"application/json",
        }
    })
    let data = await response.json()
}



let add_product= async ()=>{
    let product = {
        id:value("id"),
        Title:value("title"),
        Price:+value("price"),
        Description:value("description"),
        Ratings:+value("rating"),
        Image:value("image")
    }


    product = JSON.stringify(product) ;

    let response = await fetch ('http://127.0.0.1:3000/api/restaurant_item',{
        method:"POST" ,
        body:product,
        headers:{
            "Content-Type":"application/json",
        }
    })

    let data = await response.json()
}


let update_product = async () => {
    
    let id = document.getElementById("update_id").value;
  console.log(id)
    let response = await fetch(`http://127.0.0.1:3000/api/restaurant_item/${id}`, {
      method: "PUT",
      body: JSON.stringify({
      
        Title:value("update_title"),
        Price:+(value("update_price")),
        Description:value("update_description"),
        Ratings:+(value("update_rating")),
        Image:value("update_image")
      }),
  
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data)
  };
  
  let update_content = async () => {
    let id = value("content_id");
    ;
    let obj1 = obj();
  
    let response = await fetch(`http://127.0.0.1:3000/api/restaurant_item/${id}`, {
      method: "PATCH",
      body: JSON.stringify(obj1),
  
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
  };
  
  function obj() {
    let emtpy = {};
    let kuch = value("content_title");
    if (kuch != "") {
      emtpy.Title = kuch;
    }
    if (value("content_price") != "") {
      emtpy.Price = +(value("content_price"));
    }if (value("content_image") != "") {
        emtpy.Image=value("update_image")
        = value("content_image");
      }if (value("content_description") != "") {
        emtpy.Description = value("content_description");
      }if (value("content_rating") != "") {
        emtpy.Ratings = +(value("content_rating"));
      }
  
    return emtpy;
  }

  let menu= ()=>{
    window.location.href="index.html"
  }


 