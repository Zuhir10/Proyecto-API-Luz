
export const Footer = () => {
    const footer = document.createElement('footer'); 
    footer.id = "footer-container";

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('footer-links');

    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:zelh392@g.educaand.es';
    emailLink.textContent = 'Email';
    emailLink.setAttribute("target", "_blank");


    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/zelh392';
    githubLink.textContent = 'GitHub';
    githubLink.setAttribute("target", "_blank");

    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/tuusuario/';
    linkedinLink.textContent = 'LinkedIn';
    linkedinLink.setAttribute("target", "_blank");


    linksContainer.appendChild(emailLink);
    linksContainer.appendChild(githubLink);
    linksContainer.appendChild(linkedinLink);

    const copyright = document.createElement('p');
    copyright.textContent = '© 2024 Todos los derechos reservados.';

    footer.appendChild(linksContainer);
    footer.appendChild(copyright);

    return footer;
};
