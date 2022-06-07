import * as React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button/app';
import styles from './style';

function LoginScreen({ navigation, route }) {
    console.log(route.params);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>If you have an account</Text>
            <View style={{ height: 10 }} />
            <Text style={styles.label}>Username</Text>
            <View style={{ height: 20 }} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Your username' />
            </View>
            <View style={{ height: 25 }} />
            <Text style={styles.label}>Password</Text>
            <View style={{ height: 10 }} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Your password' />
            </View>
            <View style={{ height: 25 }} />
            <Button
                text='Login'
            />
            <View style={{ height: 10 }} />
            <Text style={styles.subtitle}>Don't have an account?</Text>
            <View style={{ height: 5 }} />
            <Button
                onPress={() => navigation.navigate('Register')}
                text='Register'
            />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginScreen;