import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',        
    },
    
    title: {
        marginHorizontal: 12,
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 36,
        color: '#EF4747'
    },
    subtitle: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 36,
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
    input: {
        fontFamily: 'Poppins-Regular',
    },
    icon:{
        fontSize: 40,
        color: 'black'
    }
});

export default styles;