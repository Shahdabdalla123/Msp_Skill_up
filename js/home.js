let username = sessionStorage.getItem("username") || null;

let actions = document.getElementById("actions");

if (username) {
  actions.innerHTML = `<a href="account.html" style="text-decoration: none;color: #0C356A">${username}</a>`;
  
  
} else {
  actions.innerHTML = ` 
    <a href="signin.html"><button class='login'>login</button></a>
    <a href="signup.html"><button class='signup'>Sign Up</button></a>
  
   
    
  `;
}
let nav = document.getElementById("aside");
let view1 = document.getElementById("view1");
let view2 = document.getElementById("view2");
let view3 = document.getElementById("view3");
let img = document.getElementById("imgclick");
let img2 = document.getElementById("imgclick2");
let img3 = document.getElementById("imgclick3");
let arrow=document.getElementsByClassName("ar");

if (!username) {
  nav.style.pointerEvents="none";
  view1.style.pointerEvents="none";
  view2.style.pointerEvents="none";
  view3.style.pointerEvents="none";
  img.style.pointerEvents="none";
  img2.style.pointerEvents="none";
  img3.style.pointerEvents="none";

} else {
  img.style.pointerEvents="enable";
  img2.style.pointerEvents="enable";
  img3.style.pointerEvents="enable";
  view1.style.pointerEvents="enable"; 
  view2.style.pointerEvents="enable"; 
  view3.style.pointerEvents="enable"; 
  

  nav.innerHTML = `
  <a href="home.html" id="home">home</a>
  <a href="topics.html">topics</a>
  <a href="courses.html">courses</a>
  <a href="learning.html">learning websites</a>`
  ;
}