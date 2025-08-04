import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';


export default function DetailsScreen({navigation, route}){
    const { item }= route.params || {}
    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Detalhes do Item</Text>
            {item ? (
             <>
             <Text style={styles.itemTitle} >{item.title}</Text>
             <Text style={styles.itemDescription} >{item.description}</Text>
             </>
            ) : (
             <Text style= {styles.message}>Nenhum Item Selecionado</Text>
            )
            }
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
            <Text style= {styles.buttonText}>Voltar</Text>
            </TouchableOpacity>       
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignitems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        marginHorizontal: 76,
    },
    button: {
        backgroundColor: '#dc3545',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
        marginHorizontal: 110,
        fontWeight: 'bold'
    },
    itemDescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    itemTitle: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    
})