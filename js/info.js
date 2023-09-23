window.addEventListener('load', () => {
   
    const username=sessionStorage.getItem('username');
    document.getElementById("pj").innerHTML = username;
  });