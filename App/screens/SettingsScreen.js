import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Form, Item, Input, Label, Button } from "native-base";
import { WebBrowser, Icon } from "expo";

var { height, width } = Dimensions.get("window");

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      fName: "Kevin",
      lName: "Beal",
      gunLicenseNum: "0000001"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.welcomeContainer}>
              <Icon.FontAwesome name={"cog"} size={50} />
              <Text style={{ fontSize: 30, marginLeft: 20 }}>Settings</Text>
            </View>

            <View>
              <Text />
              <Form style={{ width: "100%" }}>
                <Item inlineLabel>
                  <Label>First Name</Label>
                  <Input
                    value={this.state.fName}
                    onChangeText={text => this.setState({ fName: text })}
                  />
                </Item>
                <Item inlineLabel>
                  <Label>Last Name</Label>
                  <Input
                    value={this.state.lName}
                    onChangeText={text => this.setState({ lName: text })}
                  />
                </Item>
                <Item inlineLabel disabled>
                  <Label>License #</Label>
                  <Input disabled placeholder={this.state.gunLicenseNum} />
                </Item>
              </Form>
            </View>
          </ScrollView>
          <View style={styles.logoutContainer}>
            <Button
              full
              danger
              onPress={() => {
                Alert.alert("Logged Out!");
              }}
            >
              <Text style={styles.botBarText}>Log Out</Text>
            </Button>
          </View>
        </View>
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
  formContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  logoutContainer: {
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
    color: "white",
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
