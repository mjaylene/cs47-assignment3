import { Text, View, StyleSheet } from 'react-native';
import { WebView } from "react-native-webview"


export default function DetailScreen({ navigation, route }) {
    const songUri = route.params.uri
    //console.log(songUri)
    return (
    <WebView
        source={{
            uri: songUri
        }}
        />
    );
}