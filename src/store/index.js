import { createStore, combineReducers } from "redux";

import categoriasReducer from "./reducers/categorias.reducer";
import productosReducer from "./reducers/productos.reducer";

const rootReducer = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer
});

export default createStore(rootReducer);