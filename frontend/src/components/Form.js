import { OnSubmit } from './onSubmit';

export const Form = () => {

    const mainContent = document.getElementById('main-container');

    const form = document.createElement('form');
    form.id = "form-data";

    const labelFechaIni = document.createElement('label');
    labelFechaIni.setAttribute("for", "fecha-ini");
    labelFechaIni.textContent = "Selecciona la fecha de inicio: ";
    form.appendChild(labelFechaIni);

    const inpFechaIni = document.createElement('input');
    inpFechaIni.id = "fecha-ini";
    inpFechaIni.type = "date";
    inpFechaIni.name = "fecha-ini";
    form.appendChild(inpFechaIni);

    const labelFechaFin = document.createElement('label');
    labelFechaFin.setAttribute("for", "fecha-fin");
    labelFechaFin.textContent = "Selecciona la fecha de fin: ";
    form.appendChild(labelFechaFin);

    const inpFechaFin = document.createElement('input');
    inpFechaFin.id = "fecha-fin";
    inpFechaFin.type = "date";
    inpFechaFin.name = "fecha-fin";
    form.appendChild(inpFechaFin);

    const labelHora = document.createElement('label');
    labelHora.setAttribute("for", "hora");
    labelHora.textContent = "Selecciona la hora: ";
    form.appendChild(labelHora);

    const inpHora = document.createElement('input');
    inpHora.id = "hora";
    inpHora.type = "number";
    inpHora.name = "hora";
    inpHora.placeholder = "Debe ser entre 0 y 23";
    form.appendChild(inpHora);

    const button = document.createElement("button");
    button.id = "btn-form";
    button.type = "submit";
    button.textContent = "Ver gráfico";
    form.appendChild(button);

    button.addEventListener("click", (event) => {
        event.preventDefault(); 

        const fechaIni = inpFechaIni.value;
        const fechaFin = inpFechaFin.value;
        const hora = inpHora.value;

        OnSubmit(fechaIni, fechaFin, hora);

        form.reset();  
    });

    mainContent.appendChild(form);

    return form;
};
