function login(event){
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const url = "https://682b3c7fd29df7a95be2a11e.mockapi.io/login"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const userExists = data.some(user => user.name == username);

            const user = data.find(user => user.name == username);

            if(user && user.password === password){
                console.log("successful login")
                window.location.href = "pages/home.html"
            }else if(!userExists){
                document.querySelector('#login-error').innerHTML = "<p>no user found</p>"
            }else{
                document.querySelector('#login-error').innerHTML = "<p>incorrect password</p>"
            }
        })
        .catch(error => console.error(error))
}