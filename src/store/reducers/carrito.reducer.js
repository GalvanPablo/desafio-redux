import { AGREGRAR_PRODUCTO, ELIMINAR_PRODUCTO, LIMPIAR_CARRITO, COMPRAR_PRODUCTOS } from '../actions/carrito.actions';

const initialState = {
    listado: [] // [{ producto, cantidad }, { producto, cantidad }, ...]
}

const indiceProducto = (listado, id) => (
    listado.findIndex(item => item.producto.id === id)
)


const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREGRAR_PRODUCTO:

            const indice = indiceProducto(state.listado, action.producto.id);

            if(indice === -1){
                return {
                    listado: [...state.listado, { producto: action.producto, cantidad: action.cantidad }]
                }
            }else{
                const aux = [...state.listado];
                aux[indice].cantidad += action.cantidad;
                return {
                    listado: aux
                }
            }
        
        case ELIMINAR_PRODUCTO:
            const index = indiceProducto(state.listado, action.id)
            if(index !== -1){
                const aux = [...state.listado];
                aux.splice(index, 1);
                return {
                    listado: aux
                }
            }else{
                return state;
            }
        
        case LIMPIAR_CARRITO:
            return {
                listado: []
            }
        
        default:
            return state;
    }
}

export default carritoReducer;