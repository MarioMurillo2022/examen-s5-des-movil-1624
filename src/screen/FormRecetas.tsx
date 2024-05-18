import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles/Agregar';

interface IReceta {
    recetaId: number;
    nombreReceta: string;
    ingredientes: string;
}

const FormRecetas = () => {
    const [recetaId, setRecetaId] = useState<number>(0);
    const [nombreReceta, setNombreReceta] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [recetas, setRecetas] = useState<IReceta[]>([]);
    const [errorNombre, setErrorNombre] = useState<string>('');
    const [errorIngredientes, setErrorIngredientes] = useState<string>('');

    useEffect(() => {
    }, [recetas]);

    const agregarReceta = () => {
        if (nombreReceta.trim() === '') {
            setErrorNombre('El nombre no puede estar vacío');
            return;
        } else {
            setErrorNombre('');
        }

        if (ingredientes.trim() === '') {
            setErrorIngredientes('Debe tener al menos un ingrediente');
            return;
        } else {
            setErrorIngredientes('');
        }

        const nuevaReceta: IReceta = {
            recetaId: recetaId + 1,
            nombreReceta,
            ingredientes,
        };

        setRecetas([...recetas, nuevaReceta]);
        setRecetaId(recetaId + 1);
        setNombreReceta('');
        setIngredientes('');
    };

    const eliminarReceta = (id: number) => {
        const nuevasRecetas = recetas.filter(receta => receta.recetaId !== id);
        setRecetas(nuevasRecetas);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/recetas.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={{ padding: 15 }}>
                <Text style={styles.headerText}>Libro de recetas</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder="Nombre"
                    onChangeText={text => setNombreReceta(text)}
                    value={nombreReceta}
                />
                {errorNombre ? <Text style={styles.errorText}>{errorNombre}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholderTextColor='white'
                    placeholder="Ingredientes"
                    onChangeText={text => setIngredientes(text)}
                    value={ingredientes}
                />
                {errorIngredientes ? <Text style={styles.errorText}>{errorIngredientes}</Text> : null}
                <Button
                    title="Agregar Receta"
                    onPress={agregarReceta}
                    color="#2c6e49"
                />
                <Text style={styles.listHeaderText}>Recetas:</Text>
                <FlatList
                    data={recetas}
                    renderItem={({ item }) => (
                        <View style={styles.recetaContainer}>
                            <Text style={styles.recetaText}>
                                Nombre Receta: {item.nombreReceta} -- Ingredientes: {item.ingredientes} -- id: {item.recetaId}
                            </Text>
                            <TouchableOpacity onPress={() => eliminarReceta(item.recetaId)}>
                                <Text style={styles.deleteButton}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.recetaId.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default FormRecetas;
