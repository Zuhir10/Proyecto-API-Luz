export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Cerrar sesión';
    logoutButton.classList.add('logout-button'); 
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        window.location.reload();
    });
    header.appendChild(logoutButton);

    const icon = document.createElement('img');
    icon.src = "icono.png"; 
    icon.alt = 'Ícono de la luz';
    icon.classList.add('icon');
    header.appendChild(icon);

    const title = document.createElement('h1');
    title.textContent = 'Precios de la Luz';
    header.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Consulta los precios de la luz según la fecha y hora que selecciones.';
    header.appendChild(subtitle);

    return header;
};