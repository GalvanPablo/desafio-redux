import { API_URL } from '../../constants/database';

export const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS';
export const FILTRAR_PRODUCTOS = 'FILTRAR_PRODUCTOS';
export const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';


export const obtenerProductos = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}productos.json`);
            const result = await response.json();

            const productos = [];
            for (let key in result) {
                productos.push({
                    id: key,
                    nombre: result[key].nombre,
                    precio: result[key].precio,
                    idCategoria: result[key].idCategoria
                });
            }

            dispatch({
                type: OBTENER_PRODUCTOS,
                productos
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const filtrarProductos = (idCategoria) => ({
    type: FILTRAR_PRODUCTOS,
    idCategoria
})


export const seleccionarProducto = (id) => ({
    type: SELECCIONAR_PRODUCTO,
    id
})