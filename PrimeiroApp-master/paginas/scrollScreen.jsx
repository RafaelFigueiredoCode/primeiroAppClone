import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native';
import ScrollCard from './scrollCard.jsx'
import { useState, useEffect } from 'react'

export default function ScrollScreen({ navigation }) {

    const [clickCount, setClickCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela com ScrollView</Text>

            <Text style={styles.counterText}>Itens clicados: {clickCount}</Text>

            <ScrollView style={styles.scrollContainer}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.item}
                        onPress={() => {
                            setClickCount((prevCount) => prevCount + 1);
                            navigation.navigate('Details', { mensagem: `Item ${index + 1} clicado!` });
                        }}
                    >
                        <ScrollCard
                            text={`Item ${index + 1}`}
                            image={require('./download.jpg')}
                            
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    counterText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    scrollContainer: {
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});