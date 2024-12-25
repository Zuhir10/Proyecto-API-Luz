import { Login } from './Login';

export const Register = () => {
    const form = document.createElement('form');
    form.id = "register-form";
    form.innerHTML = `
        <h2>Registro</h2>
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Registrarse</button>
    `;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;

        if (username && password) {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));

            alert('Usuario registrado exitosamente');
            form.reset();
            document.getElementById('app').innerHTML = '';
            document.getElementById('app').appendChild(Login()); 
        } else {
            alert('Por favor, complete todos los campos');
        }
    });

    return form;
};
