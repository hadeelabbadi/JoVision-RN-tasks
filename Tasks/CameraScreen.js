import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

export default function CameraScreen() {
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });

    if (!result.didCancel && result.assets) {
      setPhoto(result.assets[0].uri);
    }
  };

  const confirmSave = () => {
    Alert.alert(
      "Save Photo",
      "Do you want to save this photo?",
      [
        {
          text: "Discard",
          style: "destructive",
          onPress: () => setPhoto(null),
        },
        {
          text: "Save",
          onPress: () => {
            Alert.alert("Saved!", "Photo saved successfully");
            setPhoto(null);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        <Button title="Take Photo" onPress={takePhoto} />
      ) : (
        <>
          <Image source={{ uri: photo }} style={styles.image} />
          <Button title="Save / Discard" onPress={confirmSave} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});