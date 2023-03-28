import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { limpiarCarrito, eliminarProductoCarrito, comprarProductos } from '../store/actions/carrito.actions'

const Carrito = () => {

    const carrito = useSelector(state => state.carrito.listado)
    const total = useSelector(state => state.carrito.total)
    const dispatch = useDispatch()

    return (
        <View style={styles.screen}>
            <Text style={styles.titulo}>Carrito</Text>
            <FlatList
                data={carrito}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Button title="X" onPress={() => {
                            dispatch(eliminarProductoCarrito(item.producto.id))
                        }} />
                        <Text>{item.cantidad} ud.</Text>
                        <Text>{item.producto.nombre}</Text>
                        <Text>${item.producto.precio}</Text>
                    </View>
                )}
                keyExtractor={item => item.producto.id}
            />
            {
                carrito.length > 0 &&
                <>
                    <Text style={styles.titulo}>Total: ${total}</Text>
                    <Button title="Limpiar carrito" onPress={()=>{
                        dispatch(limpiarCarrito())
                    }}/>
                    <Button title="Comprar" onPress={()=>{
                        dispatch(comprarProductos(carrito, total))
                    }}/>
                </>
            }
        </View>
    )
}

export default Carrito

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
    },
})