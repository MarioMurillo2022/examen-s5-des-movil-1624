import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Inicio from '../screen/Inicio';
import FormRecetas from '../screen/FormRecetas';
import ListarRecetas from '../screen/ListarRecetas';
import { NavigationContainer } from '@react-navigation/native';

const tab = createBottomTabNavigator();

const BarraInicio = () => {
    return (
        <NavigationContainer>
            <tab.Navigator
                initialRouteName='Home'
            >
                <tab.Screen name='Home' component={Inicio}
                    options={{
                        tabBarLabel: "Inicio",
                        tabBarIcon: (props) => (
                            <MaterialIcons name='home' size={24} color="#05668d"></MaterialIcons>
                        ),
                        headerShown: false
                    }}
                ></tab.Screen>
                <tab.Screen name='Agregar receta' component={FormRecetas}
                    options={{
                        tabBarIcon: (props) => (
                            <MaterialCommunityIcons name="playlist-edit" size={24} color="#0b6e4f" />
                        ),
                        headerShown: false
                    }}
                ></tab.Screen>
                <tab.Screen name='Lista de recetas' component={ListarRecetas}
                    options={{
                        tabBarIcon: (props) => (
                            <Octicons name="tasklist" size={24} color="#ea9010" />
                        ),
                        headerShown: false
                    }}
                ></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    )
}

export default BarraInicio