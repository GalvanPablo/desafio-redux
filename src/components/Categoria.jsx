import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Categoria = ({categoria, onPress}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor: categoria.color}]}>
            <Text>{categoria.nombre}</Text>
        </Pressable>
    )
}

export default Categoria

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
})