import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const DetalleProducto = () => {
    const producto = useSelector(state => state.productos.todos).find((p) => p.id === useSelector(state => state.productos.seleccionado))

    return (
        <View style={styles.screen}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>
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