window.addEventListener('load', () => {
   
    const username=sessionStorage.getItem('username');
    document.getElementById("pj").innerHTML = username;
  });

function info(event)
{
  event.preventDefault();
  const Age = document.getElementById('Age').value;
  var selectElement = document.getElementById("Track");
  var selectedValue = selectElement.value;
  sessionStorage.setItem("Age", Age);
  sessionStorage.setItem("Track", selectedValue);
  window.location.href = "profile.html";
}   