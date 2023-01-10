function post(){
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    postname = document.getElementById("postFullName");
    postemail = document.getElementById("postEmail");
    postMessage = document.getElementById("postMessage");
    postname.innerHTML = name;
    postemail.innerHTML = email;
    postMessage.innerHTML = message;
}
var btn = document.getElementById('btn');
btn.addEventListener("click", post)