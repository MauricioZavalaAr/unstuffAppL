import React from 'react';
import { View , ImageBackground, StyleSheet, Image, Text} from 'react-native';
import color from '../config/color';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/LivingRoom.jpg')} style={styles.background}>
        <Image source={require('../assets/UnStuffLogo.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Unstuff Your Life</Text>
        <View style={styles.loginButton}>
          <Text style={styles.text1}>LOGIN</Text>
        </View>
        <View style={styles.registeButton}>
          <Text style={styles.text1}>REGISTER</Text>
        </View>
            
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      
      loginButton: {
        width: '90%',
        height: 70,
        backgroundColor: color.primary,
        borderRadius: 30,
        margin: 5,
        justifyContent: "center", 
        alignItems: "center" 
      },
      registeButton: {
        width: '90%',
        height: 70,
        backgroundColor: color.secondary,
        borderRadius: 30,
        margin: 5,
        justifyContent: "center", 
        alignItems: "center" 
      },
      logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 80
      },
      tagline: {
        bottom: 400 
      },
      text1: {
        color: 'white',
        fontSize: 24,
        fontFamily: Platform.OS === 'android' ? 'Arial' : 'Arial'
      }
      
})


export default WelcomeScreen;