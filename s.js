function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        opinions: document.getElementById("message").value,
    };


const serviceID = "service_lv46bz8";
const templateID = "template_14pdtv8"

emailjs
.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Thank you for feedback");

})
.catch((err)=>console.log(err));
}