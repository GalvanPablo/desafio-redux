import React from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import { Categoria } from '../components'

import { useSelector, useDispatch } from 'react-redux'
import { obtenerCategorias, seleccionarCategoria } from '../store/actions/categorias.action'

import { API_URL } from '../constants/database'

// Muestra el listado de todas las categorías
const ListadoCategorias = ({navigation}) => {

    const categorias = useSelector(state => state.categorias.categorias)

    const productos = useSelector(state => state.productos.todos)
    React.useEffect(() => {
        dispatch(obtenerCategorias())
    }, [])

    const dispatch = useDispatch()
    const verProductos = (idCategoria) => {
        dispatch(seleccionarCategoria(idCategoria))
        navigation.navigate("ListadoProductos")
    }

    return (
        <View>
            <FlatList
                data={categorias}
                renderItem={({item}) => <Categoria categoria={item} onPress={()=>{verProductos(item.id)}} />}
                keyExtractor={item => item.id}
            />
            {/* <Button title="Subir productos" onPress={()=>{
                console.log(productos)
                productos.map(producto => {
                    fetch(`${API_URL}productos.json`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nombre: producto.nombre,
                            idCategoria: producto.idCategoria,
                            precio: producto.precio,
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Se subieron los productos al servidor');
                        console.log(data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
            }}/> */}
        </View>
    )
}

export default ListadoCategorias

const styles = StyleSheet.create({})