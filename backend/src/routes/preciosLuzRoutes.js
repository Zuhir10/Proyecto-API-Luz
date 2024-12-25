import express from 'express';
import { createPrecioLuzHandler, deletePrecioLuzHandler, getAllPreciosLuzByDiaHandler, getAllPreciosLuzByHoraHandler, getAllPreciosLuzHandler, getPreciosLuzByIdHandler, getPreciosLuzPorRangoDeFechasHandler, getPreciosLuzPorRangoDeFechasYHoraHandler } from '../controllers/precioLuzController.js';

const router = express.Router();

router.get('/:id', getPreciosLuzByIdHandler);
router.post('/', createPrecioLuzHandler);
router.delete('/:id', deletePrecioLuzHandler);

router.get('/precios/:fechaInicio/:fechaFin/:hora', getPreciosLuzPorRangoDeFechasYHoraHandler);
router.get('/precios/:fechaInicio/:fechaFin', getPreciosLuzPorRangoDeFechasHandler);
router.get("/", getAllPreciosLuzHandler);
router.get("/dia/:fecha", getAllPreciosLuzByDiaHandler);
router.get("/hora/:hora", getAllPreciosLuzByHoraHandler);

export default router;