// import { CATEGORIAS } from '../../data/categorias';
import { OBTENER_CATEGORIAS, SELECCIONAR_CATEGORIA } from '../actions/categorias.action';

const initialState = {
    categorias: [],
    seleccionada: null
};

const categoriasReducer = (state = initialState, action) => {
    switch(action.type) {
        case OBTENER_CATEGORIAS:
            return {
                categorias: action.categorias
            };
        case SELECCIONAR_CATEGORIA:
            const index = state.categorias.findIndex(c => c.id === action.id);
            if(index < 0) return state;
            return {
                ...state,
                seleccionada: state.categorias[index].id
            };
        default:
            return state;
    }
}

export default categoriasReducer;