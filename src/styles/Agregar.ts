// styles/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a535c",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'white',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        color: '#2c6e49',
    },
    recetaText: {
        color: 'white',
        fontSize: 18
    },
    headerText: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
    listHeaderText: {
        fontSize: 20,
        marginTop: 20,
        color: 'white',
    }, image: {
        width: 200,
        height: 120,
        marginBottom: 20,
        justifyContent: 'center',

    },
    deleteButton: {
        color: 'red',
        fontWeight: 'bold',
    },
    recetaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default styles;
