import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,PermissionsAndroid
} from "react-native";
import React, { useEffect, useState,useRef } from "react";
import Screen from "../components/Screen";
import { moderateScale } from "../styles/Scalling";
import { regularStyle } from "../styles/Typography";
import { BLACK, GRAY, WHITE } from "../styles/Colors";
import GalleryImage from "../components/GalleryImage";
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from 'react-native-camera';
import { height, width } from "../styles/Others";
import { CropView } from 'react-native-image-crop-tools';

export default function AddClique({ navigation }) {
  const camera = useRef(null);
  const cropViewRef = useRef(null);
  const { Type } = RNCamera.Constants;
  const [images, setImages] = useState([]);
  const [type, setType] = useState(Type.back);
  const [flashMode, setFlashMode] = useState("off");
  const [showCamera, setShowCamera] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showCrop, setShowCrop] = useState(false);
  const handleImage = async (item) => {
    if (item == "roll") {
      setShowCamera(true);
    } else {
      setShowCrop(true);
      setSelectedImage(item.node.image)
    }
  };
  const  takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
}
  const getImages = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const status = await PermissionsAndroid.request(permission);
    console.log(status)
    if (status === 'granted') {
      const assets =await CameraRoll.getPhotos({first:20});
      console.log(assets)
      setImages(assets.edges)
    }
  
    return ;
    // const access = await MediaLibrary.getPermissionsAsync();
    // if (access.granted) {
    //   let options = {};
    //   if (images.length > 0) {
    //     const creationTime = images[images.length - 1].creationTime;
    //     options.createdBefore = new Date(creationTime);
    //   }
    //   const media = await MediaLibrary.getAssetsAsync(options);
    //   let newImages = media.assets;
    //   if (images.length > 0) {
    //     newImages = [...images, ...newImages];
    //   }
    //   setImages(newImages);
    // }
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <Screen page="addClique" navigation={navigation} title="Add to clique">
      {showCamera && (
        <View style={styles.container}>
          <RNCamera
          ref={camera}
          style={styles.camera}
          type={type}
          flashMode={flashMode}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          <View style={styles.buttonContainer}>
              <CameraButton
                image={require("../assets/icons/close.png")}
                onPress={() => setShowCamera(false)}
              />
              <CameraButton
                image={require("../assets/icons/flashOff.png")}
                onPress={() => {
                  setFlashMode(flashMode == "off" ? "torch" : "off");
                }}
              />
              <CameraButton
                image={require("../assets/icons/flip.png")}
                onPress={() => {
                  setType(type === Type.back ? Type.front : Type.back);
                }}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Image
                source={require("../assets/icons/fingerPrintWhite.png")}
                style={{ height: moderateScale(35), width: moderateScale(27) }}
              />
            </TouchableOpacity>
        </RNCamera>
          <View style={styles.buttonContainer}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cameraText}>UPLOAD</Text>
              <Image style={styles.cameraImage} />
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraIcon} onPress={takePicture}>
              <Image
                source={require("../assets/icons/camera.png")}
                style={{ height: moderateScale(55), width: moderateScale(55) }}
              />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.cameraText}>COVER</Text>
              <Image style={styles.cameraImage} />
            </View>
          </View>
        </View>
      )}
      {showCrop && (
        <View style={{...styles.container,alignItems:'center'}}>
          <Text style={styles.cameraText}>CROP</Text>
          <Image
            source={require("../assets/icons/crop.png")}
            style={{ marginVertical: 15 }}
          />
          {/* <Image style={styles.camera} source={{uri:selectedImage.uri}} /> */}
          <CropView
          sourceUrl={selectedImage.uri}
          style={styles.camera}
          ref={cropViewRef}
          onImageCrop={(res) => console.warn(res)}
        />
          <TouchableOpacity activeOpacity={0.8} style={styles.crop} onPress={()=>setShowCrop(false)}>
            <Image
              source={require("../assets/icons/fingerprint.png")}
              style={{ height: moderateScale(30), width: moderateScale(22) }}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.labelView}>
        <View style={styles.row}>
          <Text style={{ ...styles.label, marginHorizontal: moderateScale(5) }}>
            PHONE
          </Text>
          <Image source={require("../assets/icons/phoneDown.png")} style={{}} />
        </View>
        <Text style={styles.label}>SELECT</Text>
      </View>
      <FlatList
        data={["roll", ...images]}
        renderItem={({ item }) => (
          <GalleryImage item={item} onPress={() => handleImage(item)} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        numColumns={3}
        style={{ flex: 1, marginLeft: moderateScale(5) }}
        onEndReached={() => getImages()}
        onEndReachedThreshold={1}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: moderateScale(10),
  },
  label: {
    ...regularStyle,
    color: BLACK,
    fontSize: moderateScale(14),
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 22,
    backgroundColor: BLACK,
    padding: 20,
  },
  camera: {
    height: height * 0.68,
    width: width - 40,
    borderRadius: 20,
    backgroundColor: GRAY,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  button: {
    height: moderateScale(50),
    width: moderateScale(45),
    borderRadius: moderateScale(50),
    backgroundColor: BLACK,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  cameraText: { ...regularStyle, fontSize: moderateScale(14) },
  cameraImage: {
    width: 60,
    height: 90,
    borderRadius: 15,
    backgroundColor: GRAY,
  },
  cameraIcon: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: WHITE,
    borderRadius: 15,
  },
  crop: {
    height: 35,
    width: width * 0.4,
    borderRadius: moderateScale(50),
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    marginTop:25,
  },
});

const CameraButton = ({ onPress, image }) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <Image source={image} style={{}} />
  </TouchableOpacity>
);
