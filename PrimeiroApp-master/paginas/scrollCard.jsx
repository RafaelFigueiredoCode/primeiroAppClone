import { StyleSheet, View, Text, Image } from 'react-native';

export default function ScrollCard({ text, image }) {
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={image} />
            <Text style={styles.itemText}>{text}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});