export const AGREGRAR_PRODUCTO = 'AGREGRAR_PRODUCTO';
export const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';
export const LIMPIAR_CARRITO = 'LIMPIAR_CARRITO';
export const COMPRAR_PRODUCTOS = 'COMPRAR_PRODUCTOS';

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

const comprarProductos = () => ({
    type: COMPRAR_PRODUCTOS,
})
