let menubutton = document.querySelector(".header .burger");
let menuparent = document.querySelector(".header .menu");
let menu = document.querySelector(".header .menu ul");
let closebutton = document.querySelector(".header .menu ul .closing");




//bring big image , the sliderpage and the close button
let bigimagecontainer = document.querySelector(".main-page .shown");
let bigimage = document.querySelectorAll(".shown img");
let sliderpage = document.querySelector(".sliderpage");
let sliderpagepos = document.querySelector(".sliderpage .pos");
let redclose = document.querySelector(".sliderpage .close");
let next = document.querySelector(".pos .next");
let previous = document.querySelector(".sliderpage .previous");
let thumbnail = document.querySelectorAll(".thumbnail");
let images = Array.from( document.querySelectorAll(".thumbnail img"));
let bigimages = images.splice(4);
let count=0;

 

//clicking on the next page 
function thumbnailshuffleplus(){
   count += 1
   if(count>bigimages.length-1 ){
       count=0;
   } 
   console.log(count)
     images.forEach((a) =>  a.classList.remove("active")  
     )
     images[count].classList.add("active");
   bigimages.forEach((b) =>  b.classList.remove("active"))
    bigimages[count].classList.add("active");
    bigimage.forEach((o) => o.setAttribute("src",bigimages[count].getAttribute("data-img")))
}
function thumbnailshuffleminus(){
   count -= 1
   if(count<0 ){
       count=bigimages.length-1;
   } 
   console.log(count)
     images.forEach((a) =>  a.classList.remove("active")  
     )
     images[count].classList.add("active");
   bigimages.forEach((b) =>  b.classList.remove("active"))
    bigimages[count].classList.add("active");
    bigimage.forEach((o) => o.setAttribute("src",bigimages[count].getAttribute("data-img")))
}

// previous.onclick=thumbnailshuffleminus ;

//thmbnail click
thumbnail[0].onclick=thumbnailshuffle1;
thumbnail[1].onclick=thumbnailshuffle2;

// thumbnail shuffle
function thumbnailshuffle1(){
images.forEach((e) =>
e.onclick= function thumbnailshuffleone(){
    images.forEach((a) =>  a.classList.remove("active"))
   bigimages.forEach((b) =>  b.classList.remove("active"))
    e.classList.add("active");
    count=images.indexOf(e);
    console.log(`#########  
    ${count}`)
    bigimages[count].classList.add("active");
    bigimage.forEach((o) => o.setAttribute("src",e.getAttribute("data-img")))
}
);
}
 
// thumbnail shuffle
function thumbnailshuffle2(){
bigimages.forEach((e) =>
e.onclick=function(){
    images.forEach((a) =>  a.classList.remove("active"))
   bigimages.forEach((b) =>  b.classList.remove("active"))
    e.classList.add("active");
    count=bigimages.indexOf(e);
    console.log(`#########  
    ${count}`)
    images[bigimages.indexOf(e)].classList.add("active");
     bigimage.forEach((o) => o.setAttribute("src",e.getAttribute("data-img")))
}

)
}





// click on the big image 
bigimage[0].onclick= openbigslider;

//close the sliderpage by clicking on the red close button


redclose.onclick=closebigslider;

// open the big slider image  
function openbigslider(){
    if(!y.matches){
sliderpage.classList.replace("d-none","d-flex")}

}

//close the big slider image 

function closebigslider(){
sliderpage.classList.replace("d-flex","d-none")



}





//media
menubutton.onclick= openmenu;

function openmenu(){

menuparent.style.display="flex";
menuparent.style.transform="translateX(-2px)";
}
window.onkeyup=function(e){
   
if(e.key == "Escape" && y.matches){
closemenu();
}
else{
    
       closebigslider();
   
}
}
closebutton.onclick= closemenu;
function closemenu(){
menuparent.style.transform="translateX(-1263px)";

}
var y =window.matchMedia("(max-width: 767px)")
var x = window.matchMedia("(min-width: 992px)")
largescreen(x) // Call listener function at run time
smallscreen(y) // Call listener function at run time
x.addListener(largescreen) // Attach listener function on state changes
y.addListener(smallscreen) // Attach listener function on state changes

function largescreen(){
   
    if(x.matches){
menuparent.style.transform="none";
    }else{
menuparent.style.transform="translateX(-1263px)";

    }
}
function smallscreen(y){
    console.log(y.matches)
if(y.matches){
bigimagecontainer.classList.add("position-relative")
bigimagecontainer.appendChild(next);
bigimagecontainer.appendChild(previous);
}else{
   
   sliderpagepos.appendChild(next);
sliderpagepos.appendChild(previous); 
}
}

// icrement and decrement (quantity)

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let ordernumber = document.querySelector(".productnumber") 
let addtocart = document.querySelector(".addtocart") 
let orderno=0;
let cartorder = 0
let orderNOtip = document.querySelector(".header .pos .ordernumber");
let orderscontainer = document.querySelector(".ordercontainer")
let emptycontainer = document.querySelector(".emptycontainer")
let carticon =document.querySelector(".pos img");

// let orderNO = document.querySelector(".header .pos .ordernumber");

plus.onclick=increaseorder;
minus.onclick=decreaseorder;
function increaseorder(){
    orderno +=1;
ordernumber.innerHTML =orderno;
}
function decreaseorder(){
    orderno -=1;
    if(orderno < 0){
        orderno = 0
    }
ordernumber.innerHTML = orderno;
}
//pressing the add to cart button
addtocart.onclick=cartordernum;
//add to cart function
function cartordernum(){
    ordernumber.innerHTML = 0;
 cartorder += orderno;
 orderNOtip.innerHTML=cartorder;
if(cartorder > 0){
orderNOtip.classList.remove("d-none")
}
addtobasket(cartorder);

}

//cart order top number

function addtobasket(o){
    orderscontainer.innerHTML="";

if(o == 0 || cartorder==0){
orderscontainer.style.display="none";
emptycontainer.style.display="flex"
}
else{
emptycontainer.classList.replace("d-flex","d-none")
orderscontainer.style.display="flex";
let orders = document.createElement("div");
orders.classList.add("order","d-flex","align-items-center","mb-3");
orderscontainer.appendChild(orders);
let productimg= document.createElement("img");
productimg.setAttribute("src","./images/image-product-1-thumbnail.jpg");
productimg.className="me-2";
orders.appendChild(productimg);
let text = document.createElement("div");
text.classList.add("text","text-black-50","me-2")
text.appendChild(document.createTextNode("Fall Limited Edition Sneakers    "))

let newprice =document.createElement("span");
newprice.classList.add("price");
newprice.textContent=`$125.00 x ${o}     `
text.appendChild(newprice);
let finalprice =document.createElement("span");
finalprice.classList.add("finalprice","fw-bold","text-black","ms-2");
finalprice.textContent=` $${125*o}.00`
text.appendChild(finalprice);
orders.appendChild(text);
let trashban = document.createElement("img")
trashban.className="basket";
trashban.setAttribute("src","./images/icon-delete.svg");
trashban.setAttribute("onclick","removeorder()");
orders.appendChild(trashban);
let checkbutton=document.createElement("div")
checkbutton.className="checkout";
checkbutton.innerHTML="Checkout"
orderscontainer.appendChild(checkbutton);
orderno=0;


}
}
let cartcontainer = document.querySelector(".cartmenu")
carticon.onclick=opencart;

function opencart(){
cartcontainer.classList.toggle("d-block");
}
function removeorder(){
     orderscontainer.innerHTML="";
     orderscontainer.style.display="none";
emptycontainer.classList.replace("d-none","d-flex")
orderNOtip.classList.add("d-none");
cartorder=0;
}