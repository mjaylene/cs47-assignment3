import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { Themes } from "../../assets/Themes";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";

export default function SongItem({artistName, songName, duration, index, albumName, imageUrl }) {
    return (
        <View style={styles.songContainer}>
            <View style={styles.songItem}>
                <Text style={{ color: Themes.colors.gray, margin: 2 }}>{index + 1}</Text>
                <Image style={styles.cover} source={{ uri: imageUrl }}></Image>
                <View style={styles.songData}>
                    <Text numberOfLines={1} style={{ fontSize: 14, color: Themes.colors.white }}>{songName}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 13, color: Themes.colors.gray }}>{artistName}</Text>
                </View>
                <View style={styles.albumData}>
                    <Text numberOfLines={1} style={{ ontSize: 14, color: Themes.colors.white }}>{albumName}</Text>
                </View>
                <Text numberOfLines={1} style={{ marginLeft: 0, fontSize: 14, color: Themes.colors.white, margin: 5 }}>{duration}</Text>
            </View>
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
        marginRight: 1
      },
      albumData: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        width: 120,
        marginRight: 0
      },
      songContainer: {
        justifyContent: 'space-between',
        width: 375
      }
});