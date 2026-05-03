import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNLocation from 'react-native-location';

export default function SensorsScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 0,
    });

    RNLocation.requestPermission({
      android: {
        detail: "fine",
      },
    }).then(granted => {
      if (granted) {
        RNLocation.getLatestLocation().then(loc => {
          setLocation(loc);
        });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>

      {location ? (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Text>Altitude: {location.altitude}</Text>
          <Text>Speed: {location.speed}</Text>
        </>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
});