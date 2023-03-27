import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Producto = ({producto, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.nombre}>{producto.nombre}</Text>
            <Text style={styles.precio}>${producto.precio}</Text>
        </Pressable>
    )
}

export default Producto

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 5,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    nombre: {
        fontSize: 18,
        fontWeight: "bold"
    },
    precio: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0000ff"
    }
})