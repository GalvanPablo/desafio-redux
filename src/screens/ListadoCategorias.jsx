import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import { Categoria } from '../components'

import { useSelector, useDispatch } from 'react-redux'
import { seleccionarCategoria } from '../store/actions/categorias.action'

// Muestra el listado de todas las categorías
const ListadoCategorias = ({navigation}) => {

    const categorias = useSelector(state => state.categorias.categorias)

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
        </View>
    )
}

export default ListadoCategorias

const styles = StyleSheet.create({})