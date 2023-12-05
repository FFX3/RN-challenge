import { StyleSheet, SafeAreaView, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store, } from './state/store'
import GifSearchInput from './components/SearchInput';
import GifResults from './components/GifResults';

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <GifSearchInput />
                        <GifResults />
                    </View>
                </SafeAreaView>
            </PaperProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
