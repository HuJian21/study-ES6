window.onload = () => {
    let username = document.getElementById('inputUsername');
    let password = document.getElementById('inputPassword');
    let intro = document.getElementById('intro');
    
    if (window.localStorage.getItem('name')) {
        username.value = window.localStorage.getItem('name');
    }
    if (window.localStorage.getItem('password')) {
        password.value = window.localStorage.getItem('password');
    }
    if (window.localStorage.getItem('intro')) {
        intro.innerHTML = window.localStorage.getItem('intro');
    }
    console.log(intro.innerHTML);
    
    
    window.onunload = () => {
        if (username.value) {
            window.localStorage.setItem('name', username.value);
        }
        if (password.value) {
            window.localStorage.setItem('password', password.value);
        }
        if (intro.innerHTML) {
            window.localStorage.setItem('intro', intro.innerHTML);            
        }       
    }
}