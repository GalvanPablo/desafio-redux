import { API_URL } from '../../constants/database';

export const SELECCIONAR_CATEGORIA = 'SELECCIONAR_CATEGORIA';
export const OBTENER_CATEGORIAS = 'OBTENER_CATEGORIAS';


export const seleccionarCategoria = (id) => ({
    type: SELECCIONAR_CATEGORIA,
    id
})


export const obtenerCategorias = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}categorias.json`);
            const result = await response.json();

            const categorias = [];
            for (let key in result) {
                categorias.push({
                    id: key,
                    nombre: result[key].nombre,
                    color: result[key].color
                });
            }

            dispatch({
                type: OBTENER_CATEGORIAS,
                categorias
            });

        } catch (error) {
            console.log(error);
        }
    }
}