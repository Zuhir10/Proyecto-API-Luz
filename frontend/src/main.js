import { Login } from './components/Login';   
import { Footer } from './components/Footer';  
import { Form } from './components/Form';   
import { Header } from './components/header';  

import "./css/main.css"

export const Main = () => {
    const app = document.getElementById('app');
    
    app.innerHTML = ''; 
    
    const mainContent = document.createElement('main');
    mainContent.id = "main-container";

    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';    

    if (isLoggedIn) {
        app.appendChild(Header());

        app.appendChild(mainContent);
        mainContent.appendChild(Form());
        app.appendChild(Footer());
        
    } else {
        const loginContainer = document.createElement('div');
        loginContainer.id = 'login-container';
        loginContainer.appendChild(Login());  
        app.appendChild(loginContainer);
    }
};

Main();
