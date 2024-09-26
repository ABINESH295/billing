
c=document.getElementById("log")

c.addEventListener("click",()=>{
    a=document.getElementById("user").value
    b=document.getElementById("pass").value
    if(a=="MYBARISTA" && b=="ADMIN123"){
        alert("welcome user have a nice day ok to contine our site...")
        location.href="home.html"

    }
    else{
        confirm(" wrong user...do you want reset username  and password ?")
    }
})