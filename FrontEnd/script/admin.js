const BaseUrl="https://safarbooking.onrender.com"
const storedname=localStorage.getItem("userName") || null
const loginBtn=document.getElementById("login")
const table=document.getElementById("tableData")

if(storedname){
    loginBtn.innerHTML=`<i class="fa-solid fa-user"></i>  ${storedname.split(' ')[0]}/Log-out`
}else {
    // loginBtn.innerHTML == ''
    loginBtn.textContent == 'Login/Signup'
}
loginBtn.addEventListener("click",()=>{
    localStorage.clear()
    window.location="./signup.html";
 })

function ProductFetch() {
   fetch(`${BaseUrl}/booking/`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json;",
    }
   })
   .then(res=>res.json())
   .then((res)=>{
    console.log(res)
    dataFetch(res)
    
   })
}

ProductFetch()






function dataFetch(data){
    table.innerHTML = null
data.forEach((ele,ind) => {
    const tr = document.createElement('tr')
    const td1=document.createElement("td")
    td1.textContent=ele.name
    const td2=document.createElement("td")
    td2.textContent=ele.adults
    const td3=document.createElement("td")
    td3.textContent=ele.childrens
    const td4=document.createElement("td")
    td4.textContent=ele.checkinDate
    const td5=document.createElement("td")
    td5.textContent=ele.checkoutdate
    const td6=document.createElement("td")
    td6.textContent=ele.customerName
    tr.append(td6,td1,td2,td3,td4,td5)
    table.append(tr)
});
}