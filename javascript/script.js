var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyf1cwAsQnBtFTi6t0VF00cDHmHNeUhOh5F0SLlTW_Wog6GZRrwM9suRGq0N_0ujquk/exec'
const form = document.forms['submit-to-google-sheet']
constmsg = document.getElementById('msg');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Message sent successfully";
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})