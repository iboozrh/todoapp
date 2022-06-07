import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const Button = (props) => {

    const onPressButton = () => {
        if (props.onPress) {
            props.onPress();}
        else{
            console.log('Button pressed');
        }
    }
        return (
        <TouchableOpacity style={styles.container} onPress={() => onPressButton()}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#EF4747',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 20,
        color: '#fff'
    },
});