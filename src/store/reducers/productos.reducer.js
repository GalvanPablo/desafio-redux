// import { PRODUCTOS } from '../../data/productos';
import { OBTENER_PRODUCTOS, FILTRAR_PRODUCTOS, SELECCIONAR_PRODUCTO } from '../actions/productos.action';

const initialState = {
    todos: [],
    filtrados: [],
    seleccionado: null
};

const productosReducer = (state = initialState, action) => {
    switch(action.type) {
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                todos: action.productos
            };
        case FILTRAR_PRODUCTOS:
            return {
                ...state,
                filtrados: state.todos.filter(producto => producto.idCategoria === action.idCategoria)
            };
        case SELECCIONAR_PRODUCTO:
            const index = state.todos.findIndex(p => p.id === action.id)
            return index < 0 ? state : {
                ...state,
                seleccionado: state.todos[index]
            };
        default:
            return state;
    }
}

export default productosReducer;