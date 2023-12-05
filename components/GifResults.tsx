import { FlatList, StyleSheet, Text, View, Image, Keyboard } from 'react-native'
import { useGetGifsBySearchQuery } from '../apis/giphy'
import { RootState } from '../state/store'
import { useSelector } from 'react-redux'

export default function GifResults(){

    const searchTerm = useSelector((state: RootState) => state.giphySearchTerm)

    const { data, error, isLoading } = useGetGifsBySearchQuery(searchTerm)

    console.log(data)

    return <View style={styles.container}>
        { error ? 

            <Text>Oh no, there was an error</Text>
        : isLoading ?
                <Text>Loading...</Text>
            :
            <FlatList 
                onScrollEndDrag={() => Keyboard.dismiss() }
                onScrollBeginDrag={() => Keyboard.dismiss() }
                style={styles.list}
                data={data.data}
                renderItem={GifResult}
                ListEmptyComponent={()=>{
                    return <View style={styles.empty}>
                        <View>
                            <Text>No results</Text>
                        </View>
                    </View>
                }}
            />
        }
        </View>


}

function GifResult({ index, item }){
    const { url, width, height } = item.images.fixed_width
        return <View style={styles.itemContainer}>
            <Image 
                key={index}
                source={{ uri: url }}  
                style={{ 
                    width: parseInt(width), 
                    height: parseInt(height), 
                    marginTop: 10,
                }}
            />
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    empty: {
        flex: 1,
        padding: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    list: {
        width: '100%',
        height: '100%',
    },

    itemContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
