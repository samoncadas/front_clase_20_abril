import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import * as SecureStore from 'expo-secure-store'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        const data = {
            email: email,
            password: password
        }
        fetch('http://10.152.191.26:8000/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            SecureStore.setItemsAsync('token', data.access_token)
            console.log(token);
            
        })
    }

  return (
          <View style={styles.container}>
              <Text style={styles.title}>Inicio de Sesion</Text>
              
              <TextInput
              placeholder='Ingrese Correo'
              onChangeText={function(t){
                setEmail(t)
              }}
              style={styles.input}/>
              
              <TextInput
              placeholder='Ingrese Contraseña'
              onChangeText={function(t){
                setPassword(t)
              }}
              secureTextEntry={true}
              style={styles.input}/>
  
              <Pressable onPress={handleLogin} style={styles.button}>
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