import * as React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button/app';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo'

function RegisterScreen({ navigation, route }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                    <Entypo onPress={() => navigation.navigate('Login', { isLogin: false })} name='chevron-thin-left' style={styles.icon} />
                        <Text style={styles.title}>Register</Text>
                    </View>
                    <View style={{ height: 20 }} />
                        <Text style={styles.subtitle}>Fill in the information below and register now</Text>
                    <View style={{ height: 25 }} />
                        <Text style={styles.label}>Username</Text>
                    <View style={{ height: 10 }} />
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
                        <Text style={styles.label}>Re Password</Text>
                    <View style={{ height: 10 }} />
                    <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder='Your password' />
                    </View>
                    <View style={{ height: 55 }} />
                    <Button
                        text='Register'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
               

export default RegisterScreen;