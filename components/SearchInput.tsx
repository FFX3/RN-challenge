import { TextInput } from 'react-native-paper'
import { store, RootState } from '../state/store'
import { setSearch } from '../state/actions'
import { useSelector } from 'react-redux'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import { StyleSheet } from 'react-native'

export default function GifSearchInput(){
    const [searchTerm, setSearchTerm] = useState('')
    
    const { dispatch } = store
    
    const setSearchTermInStoreDebounced = useCallback(debounce((text)=>{
        dispatch(setSearch(text))
    }, 500), [])

    function handleOnChange(text: string){
        setSearchTerm(text)
        setSearchTermInStoreDebounced(text)
    }

    return <TextInput 
        style={styles.input}
        onChangeText={handleOnChange}
        value={searchTerm}
    />
}

const styles = StyleSheet.create({
    input: {
        width: '100%'
    }
})
