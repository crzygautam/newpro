let flag = 2;
function controller(x){
    flag = flag +x;
    slideshow(flag);
}

slideshow(flag)
function slideshow(num){
    let slides = document.getElementsByClassName("carousel-item")
     if(num == slides.length){
        flag =0;
        num =0;
     }
     if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
     }
    for( let y  of  slides){
        y.style.display="none";
    }
    slides[num].style.display ="block";
}
document.getElementById("mybutton").addEventListener("click", function() {
    // Define the path to the new page or folder
    var newPath = "loginpage/login.html";

    // Navigate to the new page or folder
    window.location.href = newPath;
});
const eProducts=[
    {image:'home-image/phone.jfif',title:'Phone'},
    
    {image:'home-image/phone.jfif',title:'hgjgj'},
    
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
    
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
    {image:'home-image/phone.jfif',title:'Phone'},
]
let myString = '';
for(const product of eProducts){
    myString += `<div class="prod-catgr">
    <img class=" product-image" src="${product.image}" alt="product-catg">
    <h3>${product.title}</h3>
    </div>`
}
const cart = document.getElementById("cart");
console.log(cart);
cart.innerHTML = myString;

 setTimeout(function(){
    const testElements = document.getElementsByClassName("prod-catgr")
    
    console.log('changeeee : ' + testElements);
 },2000)