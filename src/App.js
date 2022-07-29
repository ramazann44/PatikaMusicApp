import { View, Text, SafeAreaView, FlatList, useColorScheme, TextInput, Image, ListViewBase, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Music_Data from './musicData.json'
import MusicInfo from './MusicInfo'

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const [wantedMusic, setWantedMusic] = useState('')
  const [wantedMusicList, setWantedMusicList] = useState()

  function getWantedMusic() {

    if (wantedMusic == "") {
      setWantedMusicList(Music_Data);
    } else {

      setWantedMusicList({});
      const wantedList = [];
      for (let i = 0; i < Music_Data.length; i++) {

        if (Music_Data[i].title.includes(wantedMusic)) {

          wantedList.push(Music_Data[i])
        }

      }

      setWantedMusicList(wantedList)

    }

  }

  function renderItem({ item, index }) {

    return (
      <MusicInfo
        item={item}
      />
    )


  }

  useEffect(() => {

    setWantedMusicList({})
    getWantedMusic();

  }, [wantedMusic]);


  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }}>

      <TextInput
        style={{
          width: '96%',
          padding: 10,
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          borderRadius: 20,
          margin: '2%',
        }}
        placeholder='Search'
        onChangeText={value => setWantedMusic(value)}
        value={wantedMusic}
        color={isDarkMode ? Colors.white : Colors.black}
      />

      <FlatList
        data={wantedMusicList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />


    </SafeAreaView>
  )
}

export default App