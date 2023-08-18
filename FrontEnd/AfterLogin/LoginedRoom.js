
const token = localStorage.getItem("token") || null
const storedname=localStorage.getItem("userName") || null
const loginBtn=document.getElementById("login")
// const logout=document.getElementById("logout")


if(storedname){
    loginBtn.innerHTML=`<i class="fa-solid fa-user"></i>  ${storedname.split(' ')[0]}/Log-out`
}else {
    // loginBtn.innerHTML == ''
    loginBtn.textContent == 'Login/Signup'
}

loginBtn.addEventListener("click",()=>{
   localStorage.clear()
   window.location="index.html";
})

function clickimg(smallImg){
   let fullimg= document.getElementById("imagebox") 
   fullimg.src=smallImg.src
}
function clickimg2(smallImg){
   let fullimg= document.getElementById("imagebox2") 
   fullimg.src=smallImg.src
}
function clickimg3(smallImg){
   let fullimg= document.getElementById("imagebox3") 
   fullimg.src=smallImg.src
}

// booking form
const bookBtn1=document.getElementById("bookBtn1")
const bookBtn2=document.getElementById("bookBtn2")
const bookBtn3=document.getElementById("bookBtn3")
const closebtn =document.getElementById("closebtn")
const center=document.querySelector(".center")

bookBtn1.addEventListener("click",()=>{
   open()
})
bookBtn2.addEventListener("click",()=>{
   open()
})
bookBtn3.addEventListener("click",()=>{
   open()
})
closebtn.addEventListener("click",()=>{
   close()
})

function open() {
center.classList.remove("hidden")
}
function close() {
center.classList.add("hidden")
}


