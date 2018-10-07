import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { Spinner } from "native-base";
import ActivityLog from "./../components/ActivityLog";
import { WebBrowser, Icon } from "expo";

var { width, height } = Dimensions.get("window");

var activity = [
  {
    id: 0,
    user: "00001",
    time: "Sun-Oct 07-2018",
    location: "State College",
    pic: "./../assets/images/gun-man1-min.jpg"
  },
  {
    id: 1,
    user: "00002",
    time: "Sat-Oct 06-2018",
    location: undefined,
    pic: "./../assets/images/soldier-gun.jpg"
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Icon.FontAwesome name={"mobile-phone"} size={50} />
            <Text style={{ fontSize: 30, marginLeft: 20 }}>Activity Log</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={{ fontSize: 15 }}>User: {this.state.user}</Text>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <View style={{ width: width - 30 }}>
                {activity.map(x => (
                  <ActivityLog key={x.id} id={x.id} time={x.time} user={x.user} pix={x.pic} location={x.location}/>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 20
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  botBarText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
