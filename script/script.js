function animateSignupButton(){
    const signupbutton = document.getElementById("signupbutton");
    signupbutton.style.transition = "transform 0.5s ease-in-out";
    signupbutton.style.transform = "scale(1.05)";

    setTimeout(()=>{
        signupbutton.style.transform = "scale(1)";
    },500);
}