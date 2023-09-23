window.addEventListener('load', () => {
   
   
    const fullname=sessionStorage.getItem('username');
    const Track=sessionStorage.getItem('Track'); 
    const Email=sessionStorage.getItem('Email'); 
    document.getElementById("username").value = fullname;
    document.getElementById("Track").value = Track;
    document.getElementById("EMAIL").value = Email;
    document.getElementById("username").style.fontSize = "17px";
    document.getElementById("Track").style.fontSize = "17px";
    document.getElementById("Email").style.fontSize = "17px";
     
  });
