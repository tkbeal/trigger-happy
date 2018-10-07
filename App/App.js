import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Container, Form, Item, Label, Input } from "native-base";
import { AppLoading, Asset, Font, Icon } from "expo";
import TabNavigator from "./navigation/MainTabNavigator";
import { OswaldText } from "./components/OswaldText";

var { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    loggedIn: false
  };

  toggleLogIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Container>
          {this.state.loggedIn ? (
            <TabNavigator toggleLogIn={() => this.toggleLogIn()} />
          ) : (
            <KeyboardAwareScrollView
            style={{ backgroundColor: '#bc413a' }}
              contentContainerStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: height,
                paddingHorizontal: 20
              }}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={false}
            >
              <OswaldText style={{ color: '#efefef',fontSize: 50, marginBottom: 50 }}>Trigger Happy</OswaldText>
              <Text style={{ fontSize: 25, fontWeight: "bold", color: 'white' }}>Log In</Text>
              <Form style={{ width: "100%" }}>
                <Item inlineLabel style={{ marginLeft: 0 }}>
                  <Label style={{color: 'white'}}>User</Label>
                  <Input
                    value={this.state.fName}
                    onChangeText={text => this.setState({ fName: text })}
                  />
                </Item>
                <Item inlineLabel style={{ marginLeft: 0, marginTop: 5 }}>
                  <Label style={{color: 'white'}}>Password</Label>
                  <Input
                    value={this.state.lName}
                    onChangeText={text => this.setState({ lName: text })}
                  />
                </Item>
              </Form>
              <Button
                info
                rounded
                full
                onPress={() => {
                  this.toggleLogIn();
                  Alert.alert("Logged In!");
                }}
                style={{ marginTop: 10, backgroundColor: '#b7736f' }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Log In</Text>
              </Button>
            </KeyboardAwareScrollView>
          )}
        </Container>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        oswald: require("./assets/fonts/Oswald-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
