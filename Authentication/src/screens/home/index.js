import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { Video } from "expo-av";
const { width, height } = Dimensions.get("window");
import  Octicons  from "react-native-vector-icons/Octicons";
import PlantIcons from "./../../../assets/Assets/plant.svg";
import TreeIcon from "./../../../assets/Assets/tree.svg";
import CommentIcon from "./../../../assets/Assets/comment.svg";
//
import Typography from "../../typography";
import  Entypo  from "react-native-vector-icons/Entypo";
import typography from "../../typography";
let Home = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  let [buy, setBuy] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  let [videoPlayPush, setVideoPlayPush] = React.useState([
    {
      videoURL: require("../../../assets/Assets/Video01.mp4"),
      name: "BAD BITCHES ARE MY THING",
      title: "WE@babbitch232",
      play: true,
      save: false,
      message: false,
      details:
        "“FEED CAPTION (Scoll)” Scroll an d make sure it reads well so that it can cover ir all ",
    },
    {
      videoURL: require("../../../assets/Assets/Video02.mp4"),
      name: "Hishmat",
      title: "Best seller",
      play: true,
      save: false,
      message: false,
      details:
        "“FEED CAPTION (Scoll)” Scroll an d make sure it reads well so that it can cover ir all ",
    },
    {
      videoURL: require("../../../assets/Assets/Video03.mp4"),
      name: "Beerbal",
      title: "Best seller",
      play: true,
      save: false,
      message: false,
      details:
        "“FEED CAPTION (Scoll)” Scroll an d make sure it reads well so that it can cover ir all ",
    },
  ]);

  const data = [
    { email: "WE@123453543", showIcon: true },
    { email: "WE@123453543", showIcon: true },
    { email: "WE@123453543", showIcon: true },
    { email: "WE@123453543", showIcon: false },
    { email: "WE@123453543", showIcon: false },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <ScrollView style={styles._scrollViewContainer} pagingEnabled={true}>
        {videoPlayPush.map((v, i) => {
          return (
            <View style={styles.data_main} key={i}>
              <Video
                ref={video}
                style={styles.video}
                source={v.videoURL}
                rate={1}
                shouldPlay={v.play}
                isLooping={true}
                volume={0}
                muted={true}
                resizeMode="cover"
                // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
              <TouchableOpacity
                style={styles._play_push}
                onPress={() => {
                  setModalVisible(true);
                  // videoPlayPush[i].play = !videoPlayPush[i].play;
                  // setVideoPlayPush([...videoPlayPush]);
                }}
              />
              <View style={styles._header_main}>
                <View style={styles.__header_wish_Card_main}>
                  <TouchableOpacity style={styles._search_btn}>
                    <Entypo
                      name="resize-full-screen"
                      size={24}
                      color={Typography.white}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles._user_data_main}>
                <View style={styles._user_profile_main}>
                  <Image
                    width={40}
                    height={40}
                    source={require("./../../../assets/avatar.png")}
                  />
                  <View style={styles._user_name_main}>
                    <Text style={styles._user_name}>{v.name}</Text>
                    <Text style={styles._title}>{v.title}</Text>
                    <View style={styles._footer}>
                      <TouchableOpacity
                        style={styles._footer_icons}
                        onPress={() => navigation.navigate("Comments")}
                      >
                        <CommentIcon width={20} height={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles._footer_icons}>
                        <PlantIcons width={20} height={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles._footer_icons}>
                        <TreeIcon width={20} height={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Text style={styles.content}>{v.details}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={modalVisible && styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles._heading}>BAD BITCHES ARE MY THING</Text>
                <Text style={styles._sub_heading}>
                  PRIME: WE@Alphaadrain313
                </Text>

                <View>
                  {data.map((val, i) => {
                    return (
                      <View key={i} style={styles._list}>
                        <View style={styles._inner_view}>
                          <Octicons
                            name="primitive-dot"
                            size={24}
                            color="green"
                          />
                          <Text style={styles._email}>{val.email}</Text>
                        </View>
                        {val.showIcon && (
                          <View style={styles._inner_view}>
                            <TouchableOpacity
                              style={styles._icons}
                              onPress={() => setModalVisible(false)}
                            >
                              <Image
                                width={8}
                                height={8}
                                source={require("./../../../assets/person.png")}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles._icons}
                              onPress={() => setModalVisible(false)}
                            >
                              <Image
                                width={8}
                                height={8}
                                source={require("./../../../assets/arrow.png")}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles._icons}
                              onPress={() => setModalVisible(false)}
                            >
                              <Image
                                width={8}
                                height={8}
                                source={require("./../../../assets/message.png")}
                              />
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  video: {
    height: "100%",
    width: "100%",
  },
  _play_push: {
    position: "absolute",
    alignItems: "center",
    height: height,
    width: width,
    justifyContent: "center",
  },
  _user_data_main: {
    position: "absolute",
    width: width,
    bottom: 70,
    paddingHorizontal: 20,
  },
  _scrollViewContainer: {
    height: height,
  },
  data_main: {
    height: height,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    top: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  __header_wish_Card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _wish_btn: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: Typography.whiteOpectiy,
    alignItems: "center",
    justifyContent: "center",
  },
  _search_btn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _user_profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _user_name_main: {
    marginLeft: 15,
  },
  _user_name: {
    color: Typography.white,
    fontFamily: Typography.medium,
    fontSize: 18,
  },
  _title: {
    color: Typography.white,
    fontFamily: Typography.light,
    fontSize: 11,
  },
  _action_main: {
    position: "absolute",
    bottom: 120,
  },
  _add_btn: {
    backgroundColor: Typography.primary,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _buy_main: {
    position: "absolute",
    bottom: 100,
    right: 15,
  },
  _amazon: {
    backgroundColor: Typography.whiteOpectiy,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  content: {
    color: Typography.white,
    width: "70%",
    fontFamily: Typography.light,
    fontSize: 10,
    lineHeight: 20,
  },
  _footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _footer_icons: {
    margin: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#9e9e9e",
  },
  modalView: {
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  _heading: {
    fontFamily: typography.semiBold,
    color: typography.white,
  },
  _sub_heading: {
    fontFamily: typography.regular,
    color: typography.white,
    paddingBottom: 40,
  },
  _list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  _inner_view: {
    flexDirection: "row",
    alignItems: "center",
  },
  _email: {
    fontFamily: typography.medium,
    color: typography.white,
    paddingLeft: 5,
  },
  _icons: {
    marginHorizontal: 4,
  },
});
export default Home;
