import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { Producto } from '../components'

import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductos, filtrarProductos, seleccionarProducto } from '../store/actions/productos.action'

// Muestra el listado de los productos (filtrados por categoría)
const ListadoProductos = ({navigation}) => {

    const categoriaSeleccionada = useSelector(state => state.categorias.seleccionada)
    const productosFiltrados = useSelector(state => state.productos.filtrados)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(obtenerProductos())
    }, [])

    React.useEffect(() => {
        dispatch(filtrarProductos(categoriaSeleccionada))
    }, [categoriaSeleccionada])

    const verDetalle = (idProducto) => {
        dispatch(seleccionarProducto(idProducto))
        navigation.navigate("DetalleProducto")
    }

    return (
        <View>
            <FlatList
                data={productosFiltrados}
                keyExtractor={producto => producto.id}
                renderItem={({item}) => <Producto producto={item} onPress={()=>{verDetalle(item.id)}} />}
            />
        </View>
    )
}

export default ListadoProductos

const styles = StyleSheet.create({})