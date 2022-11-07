import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { Themes } from "../../assets/Themes";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { NavigationContainer } from "@react-navigation/native";
import { Button} from "react-native-web";
import { WebView } from "react-native-webview"
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from "./DetailScreen";
import PreviewScreen from "./PreviewScreen";


export default function SongItem({artistName, songName, duration, index, albumName, imageUrl, navigation, trackUri, previewUrl }) {
  return (
    <View style={styles.songContainer}>
      <Pressable onPress={() => navigation.navigate('Song details', {uri: trackUri})}>
        <View style={styles.songItem}>
              <Pressable onPress={() => navigation.navigate('Song preview', {previewLink:previewUrl})}>
                <Ionicons name="play-circle" size={25} color="#00db4d" />
              </Pressable>
              <Image style={styles.cover} source={{ uri: imageUrl }}></Image>
              <View style={styles.songData}>
                  <Text numberOfLines={1} style={{ fontSize: 14, color: Themes.colors.white }}>{songName}</Text>
                  <Text numberOfLines={1} style={{ fontSize: 13, color: Themes.colors.gray }}>{artistName}</Text>
              </View>
              <View style={styles.albumData}>
                  <Text numberOfLines={1} style={{ fontSize: 14, color: Themes.colors.white }}>{albumName}</Text>
              </View>
              <Text numberOfLines={1} style={{ marginLeft: 0, fontSize: 14, color: Themes.colors.white, margin: 5 }}>{duration}</Text>
          </View>
      </Pressable>
    </View>
);
}

const styles = StyleSheet.create({
      songItem: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      cover: {
        width: 60,
        height: 60,
        margin: 10,
        marginRight: 15,
      },
      songData: {
        width: 110,
        height: 40,
        marginRight: 1,
      },
      albumData: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        width: 120,
        marginRight: 0,
      },
      songContainer: {
        justifyContent: 'space-between',
        width: 375
      }
});