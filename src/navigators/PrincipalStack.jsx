import React from "react";

import { ListadoCategorias, ListadoProductos, DetalleProducto } from "../screens";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const PrincipalStack = () => (
    <Stack.Navigator initialRouteName="ListadoCategorias">
        <Stack.Screen name="ListadoCategorias" component={ListadoCategorias}
            options={{ title: "Categorías" }}
        />
        <Stack.Screen name="ListadoProductos" component={ListadoProductos}
            options={{ title: "Productos" }}
        />
        <Stack.Screen name="DetalleProducto" component={DetalleProducto}
            options={{ title: "Detalle del producto" }}
        />
    </Stack.Navigator>
)

export default PrincipalStack;