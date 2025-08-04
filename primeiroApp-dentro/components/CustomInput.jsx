import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function CustomInput({
    value,
    onChangeText,
    placeholder,
    multiline = false,
    style,
    ...props
}) {
    return (
        <TextInput
        style={[StyleSheet.input, multiline && StyleSheet.multiline, style]}
        value= {value}
        onChangeText ={onChangeText}
        placeholder = {placeholder}
        multiline= {multiline}
        {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        fontSize: 16,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top'
    }
})