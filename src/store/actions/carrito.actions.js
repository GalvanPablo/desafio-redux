export const AGREGRAR_PRODUCTO = 'AGREGRAR_PRODUCTO';
export const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';
export const LIMPIAR_CARRITO = 'LIMPIAR_CARRITO';
export const COMPRAR_PRODUCTOS = 'COMPRAR_PRODUCTOS';

import { API_URL } from '../../constants/database';

export const agregarProductoCarrito = (producto, cantidad = 1) => ({
    type: AGREGRAR_PRODUCTO,
    producto,
    cantidad
})

export const eliminarProductoCarrito = (id) => ({
    type: ELIMINAR_PRODUCTO,
    id
})

export const actualizarProductoCarrito = (id, cantidad) => ({
    type: ACTUALIZAR_PRODUCTO,
    id,
    cantidad,
})

export const limpiarCarrito = () => ({
    type: LIMPIAR_CARRITO
})

export const comprarProductos = (listado, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}categorias.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fecha: new Date(),
                    listado,
                    total
                })
            });

            const result = await response.json();
            console.log(result);

            console.log('Compra realizada con éxito');
            dispatch(limpiarCarrito());

        } catch (error) {
            console.log(error);
        }
    }
}
