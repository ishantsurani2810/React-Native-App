import { ExternalLink } from '@/components/ExternalLink';
import { TabBarIcon } from '@/components/TabBarIcon';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { Image, ImageBackground, Linking, Platform, Pressable, StyleSheet, View } from 'react-native';

const bgImage = require('@/assets/images/coffee-1.jpg');
const address = '123 Coffee St, Coffee City, CA 90000';
const mapsUrl = Platform.select({
  ios: `http://maps.apple.com/?q=${encodeURIComponent(address)}`,
  android: `geo:0,0?q=${encodeURIComponent(address)}`,
  default: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
});
const staticMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511974.765610791!2d-124.59852128269978!3d37.16042241780115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1753020892516!5m2!1sen!2sin`;

export default function ContactScreen() {
  const email = 'coffeeshop@email.com';
  const phone = '+1-123-456-7890';
  const [mapError, setMapError] = React.useState(false);

  return (
    <ImageBackground source={bgImage} style={styles.bgImage} imageStyle={{ opacity: 0.25 }}>
      <View style={styles.centeredContainer}>
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <TabBarIcon name="mail" color="#c68e17" />
            <ThemedText style={styles.infoText} onPress={() => Linking.openURL(`mailto:${email}`)}>
              {email}
            </ThemedText>
          </View>
          <View style={styles.infoRow}>
            <TabBarIcon name="call" color="#c68e17" />
            <ThemedText style={styles.infoText} onPress={() => Linking.openURL(`tel:${phone}`)}>
              {phone}
            </ThemedText>
          </View>
          <View style={styles.infoRow}>
            <TabBarIcon name="location" color="#c68e17" />
            <ThemedText style={styles.infoText} onPress={() => Linking.openURL(mapsUrl)}>
              {address}
            </ThemedText>
          </View>
          <View style={styles.infoRow}>
            <TabBarIcon name="time-outline" color="#c68e17" />
            <ThemedText style={styles.infoText}>
              Mon–Fri: 7:00 AM – 7:00 PM
            </ThemedText>
          </View>
          <View style={styles.socialRow}>
            <ExternalLink href="https://instagram.com/yourcoffeeshop">
              <TabBarIcon name="logo-instagram" color="#c68e17" />
            </ExternalLink>
            <ExternalLink href="https://facebook.com/yourcoffeeshop">
              <TabBarIcon name="logo-facebook" color="#c68e17" />
            </ExternalLink>
          </View>
        </View>
        <Pressable style={styles.mapContainer} onPress={() => Linking.openURL(mapsUrl)}>
          {!mapError ? (
            <Image
              source={{ uri: staticMapUrl }}
              style={styles.mapImage}
              resizeMode="cover"
              onError={() => setMapError(true)}
            />
          ) : (
            <View style={styles.mapFallback}>
              <ThemedText style={{ color: '#c68e17', textAlign: 'center' }}>
                Map unavailable. Tap to open in Maps.
              </ThemedText>
            </View>
          )}
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 24,
    padding: 28,
    marginBottom: 24,
    backdropFilter: 'blur(8px)',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 12,
  },
  infoText: {
    fontSize: 13,
    color: '#c68e17',
    textDecorationLine: 'underline',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 24,
  },
  mapContainer: {
    width: 400,
    maxWidth: '100%',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#c68e17',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: 400,
    height: 200,
    borderRadius: 18,
    backgroundColor: '#eee',
  },
  mapFallback: {
    width: 400,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 18,
  },
});