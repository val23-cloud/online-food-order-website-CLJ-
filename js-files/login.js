
container= document.querySelector(".container"),
pwShowHide= document.querySelectorAll(".showhidepw"),
pwfields= document.querySelectorAll(".password"),
signUp= document.querySelector(".signup-link"),
login= document.querySelector(".login-link");

//js code to show and hide password and change icon

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click",()=>{
        pwfields.forEach(pwfield => {
            if(pwfield.type =="password"){
                pwfield.type="text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash","fa-eye");
                })
            }else{
                pwfield.type ="password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye","fa-eye-slash");
                })
            }
        })
    })
});

//js code to appear sign up

signUp.addEventListener("click",function(){
    container.classList.add("active");
});

login.addEventListener("click",function(){
    container.classList.remove("active");
})




// form validation

function loginvalidation(){
    let email= document.forms.loginform.email.value;
    let password= document.forms.loginform.password.value;
    let regEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
if(email=="" || !regEmail.test(email)){
    alert("please enter your email properly.");
    email.focus();
    return false;
}if(password==""){
    alert("please enter your password");
    password.focus();
    return false;
}else{
    alert("Login succesful.");
}

}
function signupvalidation(){
    let name= document.forms.signupform.name.value;
    let email= document.forms.signupform.email.value;
    let password= document.forms.signupform.password.value;
    let confirmed= document.forms.signupform.confirmed.value;
    let regEmail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    let regName= /\d+/g;
    

    if(name=="" || regName.test(name)){
        alert("please enter your name properly.");
        name.focus();
        return false;
    }if(email=="" || !regEmail.test(email)){
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }if(password=="" ){
        alert("please enter your password properly.");
        password.focus();
        return false;
    }if(confirmed=="" ){
        alert("please confirm your password.");
        confirmed.focus();
        return false;
    }if(password!=confirmed){
        alert("password does'nt match");
        confirmed.focus();
        return false;
    }
    
    else{
        alert("Registration succesful.");
    }
}