import { Text, View, StyleSheet } from 'react-native';
import { WebView } from "react-native-webview"


export default function PreviewScreen({ navigation, route }) {
    const previewUri = route.params.previewLink
    console.log(previewUri)
    return (
    <WebView
        source={{
            uri: previewUri
        }}
        />
    );
}