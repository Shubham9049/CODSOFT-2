const BaseUrl="https://safarbooking.onrender.com"
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const loginBtn=document.getElementById("login")
const serachroom=document.getElementById("search")


var swiper = new Swiper(".home-slider", {
    grabCursor :true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction:false,
    },navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
var swiper = new Swiper(".room-slider", {
    spaceBetween:20,
    grabCursor :true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints:{
        0:{
            slidesPerView:'1'
        },
        768:{
            slidesPerView:'2'
        },
        991:{
            slidesPerView:'3'
        }
      }
});
var swiper = new Swiper(".gallery-slider", {
    spaceBetween:10,
    grabCursor :true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction:false,
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints:{
        0:{
            slidesPerView:'1'
        },
        768:{
            slidesPerView:'2'
        },
        991:{
            slidesPerView:'3'
        }
      }
});
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    grabCursor :true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false,
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      
});

serachroom.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        name: document.getElementById("rooms").value,
        checkinDate: document.getElementById("check-in").value,
        checkoutdate: document.getElementById("check-out").value
    }
    console.log(obj)
    fetch(`${BaseUrl}/booking/searchroom`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then((res)=>{
        if(res){
            alert(res)
        }else{
            alert(res.error)
        }
    })
})

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}