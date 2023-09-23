function SignUp(event)
{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const Password = document.getElementById('Password').value;
    const isValidEmail = email =>
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    const email = document.getElementById('EMAIL').value;
    if(username.trim()=='')
    {
       document.getElementById('error1').innerHTML = 'Please Enter UserName';
       
    }
    else if(!nameRegex.test(username)) 
    {
        document.getElementById('error1').innerHTML = 'Please Enter Valid userName';
    }
    if(email.trim()=='')
    {
        document.getElementById('error2').innerHTML = 'please Enter Email';
      
    }
    else if (!isValidEmail(email)) 
    {
        document.getElementById('error2').innerHTML = 'please Enter Valid Email';
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
