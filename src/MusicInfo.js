import { View, Text, SafeAreaView, FlatList, useColorScheme, TextInput, Image, ListViewBase, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MusicInfo = ({ item }) => {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={{
            width: '100%',
            padding: '5%',
            borderBottomWidth: 2,
            borderBottomColor: isDarkMode ? Colors.dark : Colors.light,
            flexDirection: 'row'
        }}>

            <Image style={{
                width: '25%',
                height: 100,
                borderRadius: 100,
                marginRight: 10
            }}
                source={{
                    uri: item.imageUrl
                }}
            />

            <View style={{
                justifyContent: 'center',
                width: '70%'
            }}>

                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom:'2%',
                    color: isDarkMode ? Colors.white : Colors.black
                }}>
                    {item.title}
                </Text>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: 14,
                        marginRight: '10%',
                        color: isDarkMode ? Colors.white : Colors.black
                    }}>
                        {item.artist}
                    </Text>

                    <Text style={{
                        fontSize: 14,
                        marginRight: '10%',
                        color: isDarkMode ? Colors.light : Colors.dark
                    }}>
                        {item.year}
                    </Text>

                    {item.isSoldOut == true &&
                        <Text style={{
                            position:'absolute',
                            right:0,
                            fontSize: 14,
                            padding:5,
                            borderWidth:1,
                            borderColor:'red',
                            color: "red"
                        }}>
                            Tükendi
                        </Text>
                    }

                </View>

            </View>

        </View>
    )
}

export default MusicInfo