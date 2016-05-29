 window.onload = () => {
        let buttons = document.querySelectorAll('input');
        buttons[0].onclick = () => {
            window.localStorage.setItem('name', buttons[3].value);
            //sessionStorage
            //loaclStroage
        }
        buttons[1].onclick = () => {
            console.log(window.localStorage.getItem('name'));
        }
        buttons[2].onclick = () => {
            window.localStorage.removeItem('name');
        }
    }