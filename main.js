
function subscribe() {
    
    let Email = document.getElementById("emailContainer").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (Email.match(validRegex)) {
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("sign-up-mobile").style.display = "none";
        document.getElementById("mainContainer2").style.display = "block";
        document.getElementById("mySpan").textContent = Email;
        
    } else {
        document.getElementById("label2").style.display = "inline" ;
        document.getElementById("emailContainer").style.color = "hsl(4, 100%, 67%)" ;
        document.getElementById("emailContainer").style.backgroundColor = "hsl(4, 100%, 90%)" ;
    }
}