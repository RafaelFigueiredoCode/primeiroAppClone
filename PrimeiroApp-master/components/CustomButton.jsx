import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function CustomButton({title, onPress, color = '#007bff', style, textStyle}) {
    return(
      <TouchableOpacity
      style={[styles.button, {backgroundColor: color}, style]}
      onPress= {onPress}
      >
        <Text style= {[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddinngHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16.
    }
})