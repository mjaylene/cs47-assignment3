import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { Button} from "react-native-web";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import millisToMinutesAndSeconds from "./utils/millisToMinutesAndSeconds";
import SongItem from "./app/components/SongItem";
import 'react-native-gesture-handler';
import { WebView } from "react-native-webview"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from "./app/components/DetailScreen";
import PreviewScreen from "./app/components/PreviewScreen";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null

  if (token) {
    // render flatlist
    contentDisplayed = <List trackList ={tracks} navigation={navigation}/>;
  } else {
    // render authentication button
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const AuthButton = ({authFunction}) => {
  return (
  
    <Pressable onPress={authFunction}>
      <View style={styles.button}>
        <Image style={styles.spotifyLogo} 
        source={require('./assets/spotify-logo.png')}></Image>
        <Text style={styles.connect}>CONNECT WITH SPOTIFY</Text>
      </View>
    </Pressable>
  );
}

const renderSongItem = ({ item, index}, navigation) => (
  <SongItem 
    artistName = {item.album.artists[0].name}
    albumName = {item.album.name}
    imageUrl = {item.album.images[0].url}
    duration = {millisToMinutesAndSeconds(item.duration_ms)}
    index = {index}
    songName = {item.name}
    navigation = {navigation}
    trackUri = {item.external_urls.spotify}
    previewUrl = {item.preview_url}
    />
);

const List = ({trackList, navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.titleRow}>
      <Image style={styles.spotifyLogo} 
        source={require('./assets/spotify-logo.png')}></Image>
      <Text style={styles.titleText}>My Top Tracks</Text>
    </View>
    <FlatList
      data={trackList} 
      renderItem={(params) => renderSongItem(params, navigation)}
      keyExtractor={(item, index) => index}
      />
  </View>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Back " component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Song details" component={DetailScreen} />
        <Stack.Screen name="Song preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: Themes.colors.spotify,
    borderRadius: 99999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connect: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold' 
  },
  spotifyLogo: {
    height: 20,
    width: 20,
  },
});