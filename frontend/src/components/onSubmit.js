import { LineChart } from "./LineChart";
import { fechToAPI } from "../helpers/fetchAPI";

export const OnSubmit = async (fechaIni, fechaFin, hora) => {
    let url = "http://localhost:3000/api/preciosLuz";

    if (fechaIni && fechaFin && hora) {
        url = `${url}/precios/${fechaIni}/${fechaFin}/${hora}`;
    } 
    else if (fechaIni && fechaFin && !hora) {
        url = `${url}/precios/${fechaIni}/${fechaFin}`;
    } 
    else if (fechaIni && !fechaFin && !hora) {
        url = `${url}/dia/${fechaIni}`;
    } 
    else if (hora && !fechaIni && !fechaFin) {
        url = `${url}/hora/${hora}`;
    } 
    else {
        alert("Por favor, completa al menos uno de los campos (hora o fechas).");
        return;
    }


    try {
        const data = await fechToAPI(url);

        if (data && data.rows.length > 0) {
            let labels, precios;

            if (fechaIni && fechaFin && hora) {
                labels = data.rows.map(row => `${row.fecha} ${row.hora}:00`);
                precios = data.rows.map(row => row.precio);
            } 
            else if (fechaIni && fechaFin && !hora) {
                labels = data.rows.map(row => `${row.fecha} ${row.hora}:00`);
                precios = data.rows.map(row => row.precio);
            } 
            else if (fechaIni && !fechaFin && !hora) {
                labels = data.rows.map(row => `${row.hora}:00`);
                precios = data.rows.map(row => row.precio);
            } 
            else if (hora && !fechaIni && !fechaFin) {
                labels = data.rows.map(row => row.fecha);
                precios = data.rows.map(row => row.precio);
            }

            const chart = LineChart(labels, precios);

            const mainContent = document.getElementById('main-container');

            const existingChart = document.getElementById('lineChart');
            if (existingChart) {
                mainContent.removeChild(existingChart); 
            }

            mainContent.appendChild(chart);
        } else {
            alert("No se encontraron datos para los criterios seleccionados.");
        }
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        alert("Error al obtener los datos. Por favor, intenta de nuevo.");
    }
};
