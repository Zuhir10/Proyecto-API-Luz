import { Register } from './Register';

export const Login = () => {
    const form = document.createElement('form');
    form.id = "login-form";
    
    form.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Iniciar Sesión</button>
    `;

    const registerLink = document.createElement('p');
    registerLink.innerHTML = `¿No tienes una cuenta? <a href="#" id="register-link">Regístrate</a>`;
    form.appendChild(registerLink);

    registerLink.querySelector('#register-link').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('app').innerHTML = ''; 
        document.getElementById('app').appendChild(Register()); 
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('loggedIn', 'true');
            alert('Bienvenido, ' + username);
            window.location.reload(); 
        } else {
            alert('Credenciales incorrectas');
        }
    });

    return form;
};
