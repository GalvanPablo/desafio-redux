import React from "react";
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PrincipalStack from "./PrincipalStack"
import { Carrito } from "../screens"

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <Tab.Screen name="Principal" component={PrincipalStack}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name="home-outline" size={24} color={focused ? 'black' : "#748C94"} />
                        <Text style={[styles.itemText, { color: focused ? 'black' : "#748C94" }]}>Inicio</Text>
                    </View>
                ),
            }}
        />
        <Tab.Screen name="Carrito" component={Carrito}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.item}>
                        <Ionicons name="cart-outline" size={24} color={focused ? 'black' : "#748C94"} />
                        <Text style={[styles.itemText, { color: focused ? 'black' : "#748C94" }]}>Carrito</Text>
                    </View>
                )
            }}
        />
    </Tab.Navigator>
)

export default TabNav

const styles = StyleSheet.create({
    tabBar: {
        minHeight: 60,
        height: 70,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText:{
        fontSize: 13,
    },
})