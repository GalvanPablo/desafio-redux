import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import categoriasReducer from "./reducers/categorias.reducer";
import productosReducer from "./reducers/productos.reducer";
import carritoReducer from "./reducers/carrito.reducer";

const rootReducer = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    carrito: carritoReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));