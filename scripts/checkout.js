document.getElementById("form").addEventListener("submit",tarachand)

function tarachand(e){
    e.preventDefault() ;
    let form = document.getElementById("form")
    let name = form.user_name.value;
    let number = form.user_number.value
    let add=form.user_address.value
if(name==="" || number===""|| add ===""){
    alert ("fill the details")
}else{
  debounce("Your order is confirmed",0)
  debounce("Your order is being Packed",3000)
  debounce("Your order is in transit ",8000)
  debounce("Your order is out for delivery ",10000)
  debounce("Order delivered",12000)
  debounce("Your Process...completed",15000)

}
}

function debounce (func,delay){
    // if(id){
    //     clearTimeout(id)
    // }    
    // id=/
      setTimeout(function(){
            alert(func)
        },delay)
}