import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { agregarProductoCarrito } from '../store/actions/carrito.actions'

const DetalleProducto = () => {
    const producto = useSelector(state => state.productos.seleccionado)

    const dispatch = useDispatch()

    return (
        <View style={styles.screen}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>
            <Button title="Agregar al carrito" onPress={() =>{
                dispatch(agregarProductoCarrito(producto))
                alert("Producto agregado al carrito")
            }}/>
        </View>
    )
}

export default DetalleProducto

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nombre: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    precio: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})