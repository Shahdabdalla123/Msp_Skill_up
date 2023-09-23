window.addEventListener('load', () => {
   
   

  const Age=sessionStorage.getItem('Age');
  const Name=sessionStorage.getItem('username');
  const Track=sessionStorage.getItem('Track'); 
  document.getElementById("para1").innerHTML = Name;
  document.getElementById("para2").innerHTML = Age;
  document.getElementById("para3").innerHTML = Track;

});
function Add(event)
{
  event.preventDefault();
  const fullname= sessionStorage.getItem('username');
  const Language= sessionStorage.getItem('Language');
  sessionStorage.setItem("fullname",fullname);
  sessionStorage.setItem("Language",Language);
  window.location.href = "account.html";
}   