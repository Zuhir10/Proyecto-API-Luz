import { addPrecioLuz, deletePrecioLuz, getAllPreciosLuz, getAllPreciosLuzByDia, getAllPreciosLuzByHora, getPreciosLuzById, getPreciosLuzPorRangoDeFechas, getPreciosLuzPorRangoDeFechasYHora } from "../models/preciosLuz.js"


export const getAllPreciosLuzHandler = (req, res) => {

    getAllPreciosLuz((err, rows) => {
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json({rows});
        }
    });
}


export const getPreciosLuzByIdHandler = (req, res) => {
    const { id } = req.params;

    getPreciosLuzById(id, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ message: "Registro no encontrado" });
        } else {
            res.status(200).json(row);
        }
    });
};


export const getAllPreciosLuzByDiaHandler = (req, res) => {

    const { fecha } = req.params;

    getAllPreciosLuzByDia(fecha, (err, rows) => {
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json({rows});
        }
    });
}

export const getAllPreciosLuzByHoraHandler = (req, res) => {

    const { hora } = req.params;

    if (isNaN(hora) || hora < 0 || hora > 23) {
        return res.status(400).json({ error: 'La hora debe estar entre 0 y 23' });
    }

    getAllPreciosLuzByHora(hora, (err, rows) => {
        if(err){
            res.status(500).json({error: err.message});
        }else{
            res.status(200).json({rows});
        }
    });
   
}


export const createPrecioLuzHandler = (req, res) => {
    const { fecha, hora, precio } = req.body;

    if (!fecha || hora === undefined || precio === undefined) {
        return res.status(400).json({ error: 'Se requieren los campos fecha, hora y precio.' });
    }

    addPrecioLuz(fecha, hora, precio, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(result);
        }
    });
}


export const deletePrecioLuzHandler = (req, res) => {
    const { id } = req.params;

    deletePrecioLuz(id, (err, result) => {
        if(err){
            res.status(500).json({ error: err.message });
        }else if(result.changes === 0){
            res.status(404).json({ error: "Cliente no encontrado" });
        }else{
            res.status(200).json(result);
        }
    });
}

export const getPreciosLuzPorRangoDeFechasYHoraHandler = (req, res) => {
    const { fechaInicio, fechaFin, hora } = req.params;  

    getPreciosLuzPorRangoDeFechasYHora(fechaInicio, fechaFin, hora, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: "No se encontraron precios para la hora especificada en el rango de fechas." });
        }
        res.status(200).json({rows});
    });
};


export const getPreciosLuzPorRangoDeFechasHandler = (req, res) => {
    const { fechaInicio, fechaFin } = req.params;  

    getPreciosLuzPorRangoDeFechas(fechaInicio, fechaFin, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: "No se encontraron precios para la hora especificada en el rango de fechas." });
        }
        res.status(200).json({rows});
    });
};



