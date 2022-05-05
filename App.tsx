/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import WatchControl from './views/watchcontrol';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Util from './views/Util';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function sp() {
    console.log("stop")
  }

  function wC() {
    return <WatchControl stop={sp} />;
  }

  const days = [{
    key: 0,
    title: "A Stop Watch",
    component: wC,
    isFA: false,
    icon: "ios-stopwatch",
    size: 48,
    color: "#ff856c",
    hideNav: false,
  },];

  function _jumpToDay(navigation, index) {
    navigation.push(days[index].title)
  }

  function HomeScreen({ navigation }) {
    return (<ScrollView style={styles.mainView} >
      <Swiper height={150} showsButtons={false} autoplay={true}
        activeDot={<View style={{ backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}>
        <TouchableHighlight onPress={() => _jumpToDay(navigation, 0)}>
          <View style={styles.slide}>
            <Image style={styles.image} source={{ uri: 'day1' }}></Image>
            <Text style={styles.slideText}>Day1: Timer</Text>
          </View>
        </TouchableHighlight>
      </Swiper>
      <View style={styles.touchBoxContainer}>
        {
          days.map((elem, index) => (
            <TouchableHighlight key={elem.key} style={[styles.touchBox, index % 3 == 2 ? styles.touchBox2 : styles.touchBox1]} underlayColor="#eee" onPress={() => _jumpToDay(navigation, index)}>
              <View style={styles.boxContainer}>
                <Text style={styles.boxText}>Day{index + 1}</Text>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
    </ScrollView>);
  }

  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {
          days.map((elem, index) => (
            <Stack.Screen name={elem.title} component={elem.component}/>
          ))
        }
    </Stack.Navigator>

  </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  mainView: {
    marginTop: 63
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
  itemWrapper: {
    backgroundColor: '#f3f3f3'
  },
  touchBox: {
    width: Util.size.width / 3 - 0.33334,
    height: Util.size.width / 3,
    backgroundColor: "#fff",
  },
  touchBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc",
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc",
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: Util.size.width / 3,
    height: Util.size.width / 3,
  },
  boxIcon: {
    position: "relative",
    top: -10
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: Util.size.width / 3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },
  slide: {
    flexGrow: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    position: "absolute",
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign: "center",
    fontSize: 12
  },
  image: {
    width: Util.size.width,
    flexGrow: 1,
    alignSelf: 'stretch',
  }
});

export default App;
