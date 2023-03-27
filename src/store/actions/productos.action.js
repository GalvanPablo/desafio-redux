export const FILTRAR_PRODUCTOS = 'FILTRAR_PRODUCTOS';
export const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';

export const filtrarProductos = (idCategoria) => ({
    type: FILTRAR_PRODUCTOS,
    idCategoria
})

export const seleccionarProducto = (id) => ({
    type: SELECCIONAR_PRODUCTO,
    id
})