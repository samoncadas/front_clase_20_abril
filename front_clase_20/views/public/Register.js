import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { RegisterH } from '../../hooks/RegisterH'

export default function Register() {

    const {
        setName,
        setEmail,
        setPassword,
        handleSubmit
    } = RegisterH()

    function enviarDatos(){
        handleSubmit().then(function (res){
            console.log("La respuesta es: "+ res.message)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            
            <TextInput
            placeholder='Ingrese Nombre'
            onChangeText={setName}
            style={styles.input}/>
            
            <TextInput
            placeholder='Ingrese Correo'
            onChangeText={setEmail}
            style={styles.input}/>
            
            <TextInput
            placeholder='Ingrese Contraseña'
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}/>

            <Pressable onPress={enviarDatos} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#F5F7FA'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333'
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
        elevation: 2
    },
    button: {
        backgroundColor: '#4A90E2',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})