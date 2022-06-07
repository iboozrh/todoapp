import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    },
    title: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 42,
        color: '#EF4747'
    },
    subtitle: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 42,
        color: 'black'
    },
    label: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 24,
        color: '#EF4747'
    },
    inputContainer: {
        height: 40,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
        justifyContent: 'center',
        paddingLeft: 12
    },
    input:{
        fontFamily: 'Poppins-Regular',
    }
});

export default styles;