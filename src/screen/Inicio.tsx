import { View, Image } from 'react-native'
import React from 'react'
import styles from '../styles/Inicio'
const Inicio = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/recetas.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View>
                <text style={styles.textoInicial}>
                    La aplicación permite a los usuarios agregar nuevas recetas,
                    ver la lista de recetas disponibles, ver los detalles de una receta específica
                    y eliminar recetas existentes
                </text>
            </View>
        </View>
    )
}



export default Inicio
