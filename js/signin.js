function Signin(event)
{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const Password = document.getElementById('Password').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if(username.trim()=='')
    {
       document.getElementById('error1').innerHTML = 'Please Enter UserName';
       
    }
    else if(!nameRegex.test(username)) 
    {
        document.getElementById('error1').innerHTML = 'Please Enter Valid userName';
    }
    if(Password.trim()==''||Password.length < 8 )
    {
        document.getElementById('error3').innerHTML = 'Please Enter Password with at least 8 character';
        
    }
    else
    {
        sessionStorage.setItem("username", username);
        window.location.href = "add_info.html";
    }
 
}
