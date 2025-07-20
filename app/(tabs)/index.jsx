import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import bgImage from "@/assets/images/coffee-1.jpg";
import { Link } from 'expo-router';

const app = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode='cover'>
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.appIcon}
        />
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href='/contact' style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}><Text style={styles.buttonText}>Contact Us</Text></Pressable>
        </Link>
      </View>
    </ImageBackground>
  )
}

export default app

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 32,
    paddingVertical: 48,
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 32,
  },
  appIcon: {
    width: 80,
    height: 80,
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 2,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 2,
    letterSpacing: 1,
  }
})