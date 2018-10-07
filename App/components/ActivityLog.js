import React from "react";
import { View, Text, Dimensions, Image, StyleSheet} from "react-native";
import { Card, CardItem, Left, Body, Right } from "native-base";
import { Icon } from 'expo';

const image1 = require('./../assets/images/example-shot.jpg');
const image2 = require('./../assets/images/man-gun.jpg');
var images = [image1, image2];
  
export default class ActivityLog extends React.Component {
  getDate = () => {
    return new Date().toDateString();
  }; 

  render() {
    return (
      <Card>
        <CardItem header>
          <Icon.Feather size={30} name={'activity'}/>
          <Text style={styles.lastSeenTitle}>{this.props.time}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.id]} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem footer style={styles.footer}>
          <View style={styles.descContainer}>
            <Text style={styles.description}>User:</Text>
            <Text>{this.props.user}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.description}>Action:</Text>
            <Text>Shot Fired</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.description}>Location:</Text>
            <Text>{this.props.location == undefined ? "Unknown" : this.props.location}</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

styles = StyleSheet.create({
  lastSeenTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontWeight: 'bold'
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})
