import { PRODUCTOS } from '../../data/productos';
import { FILTRAR_PRODUCTOS, SELECCIONAR_PRODUCTO } from '../actions/productos.action';

const initialState = {
    todos: PRODUCTOS,
    filtrados: [],
    seleccionado: null
};

const productosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTRAR_PRODUCTOS:
            return {
                ...state,
                filtrados: state.todos.filter(producto => producto.idCategoria === action.idCategoria)
            };
        case SELECCIONAR_PRODUCTO:
            const index = state.todos.findIndex(p => p.id === action.id);
            if(index < 0) return state;
            return {
                ...state,
                seleccionado: state.todos[index].id
            };
        default:
            return state;
    }
}

export default productosReducer;